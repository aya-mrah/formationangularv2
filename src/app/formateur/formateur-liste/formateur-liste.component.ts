//import { FormateurDetailsComponent } from 'src/app/component/formateur/formateur-details/formateur-details.component';
import { Observable } from "rxjs";
import { FormateurService } from "src/app/service/formateur.service";
import { Formateur } from "src/app/model/formateur";
import { Component, OnInit } from '@angular/core';
import { Participant } from "src/app/model/Participant";
import {Organisme} from "src/app/model/organisme";
import {Router} from "@angular/router";
import {MatTableDataSource} from '@angular/material/table';

export interface IFormateur {
    id: number;
    nom: string;
    prenom: string;
    email: string;
    tel: number;
    type: string;
    organisme: Organisme;
}

const ELEMENT_DATA: IFormateur[] = [
  ];


@Component({
  selector: 'app-formateur-liste',
  templateUrl: './formateur-liste.component.html',
  styleUrls: ['./formateur-liste.component.css']
})
export class FormateurListeComponent implements OnInit {


 formateurs : IFormateur[];
  displayedColumns:string[] = ['id', 'nom','prenom', 'email','tel', 'type','organisme','star'];
  dataSource :MatTableDataSource<IFormateur>

 constructor(private formateurService: FormateurService,
         private router: Router) {}

  ngOnInit(): void {
        this.dataSource = new MatTableDataSource<IFormateur>(this.formateurs)
        this.reloadData();
  }

  reloadData() {
       let resp = this.formateurService.getFormateursList();
       resp.subscribe(report =>this.dataSource.data = report as IFormateur[])
  }

   applyFilter(event: Event) {
          const filterValue = (event.target as HTMLInputElement).value;
          this.dataSource.filter = filterValue.trim().toLowerCase();
        }



     deleteFormateur(id: number) {
           this.formateurService.deleteFormateur(id)
             .subscribe(
               data => {
                 console.log(data);
                 this.reloadData();
               },
               error => console.log(error));
         }

         formateurDetails(id: number){
           this.router.navigate(['formateur', id]);
         }

         updateOrganisme(id: number){
             this.router.navigate(['updateformateur', id]);
           }

         addformateur(){
             this.router.navigate(['addformateur']);
               }
}
