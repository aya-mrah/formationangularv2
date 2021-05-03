//import { OrganismeDetailsComponent } from 'src/app/organisme/organisme-details/organisme-details.component';
import { Observable } from "rxjs";
import { OrganismeService } from "src/app/service/organisme.service";
import { Organisme } from "src/app/model/organisme";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import {MatTableDataSource} from '@angular/material/table';


export interface IOrganisme {
  id: number;
  libelle: string;

}
const ELEMENT_DATA: IOrganisme[] = [
  {id: 1, libelle: 'Hydrogen'},
  {id: 2, libelle: 'Helium'}];

@Component({
  selector: 'app-organisme-liste',
  templateUrl: './organisme-liste.component.html',
  styleUrls: ['./organisme-liste.component.css']
})
export class OrganismeListeComponent implements OnInit {
  organismes: IOrganisme[];
  displayedColumns:string[] = ['id', 'libelle','star'];
  dataSource :MatTableDataSource<IOrganisme>
  //dataSource = new MatTableDataSource<Organisme[]>();

    constructor(private organismeService: OrganismeService,
      private router: Router) {
      }

    ngOnInit() {
      this.dataSource = new MatTableDataSource<IOrganisme>(this.organismes)
      this.reloadData();
        }

        //cc

    reloadData() {
     let resp = this.organismeService.getOrganismesList();
     resp.subscribe(report =>this.dataSource.data = report as IOrganisme[])


      }
      applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
      }


    deleteOrganisme(id: number) {
      this.organismeService.deleteOrganisme(id)
        .subscribe(
          data => {
            console.log(data);
            this.reloadData();
          },
          error => console.log(error));
    }

    organismeDetails(id: number){
      this.router.navigate(['organisme', id]);
    }

    updateOrganisme(id: number){
        this.router.navigate(['updateorganisme', id]);
      }

    addOrganisme(){
        this.router.navigate(['addorganisme']);
          }

}
