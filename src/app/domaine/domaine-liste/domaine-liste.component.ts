import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { DomaineService } from "src/app/service/domaine.service";
import { Domaine } from "src/app/model/domaine";
import { Router } from '@angular/router';
import {MatTableDataSource} from '@angular/material/table';

export interface IDomaine {
  id: number;
  libelle: string;

}
const ELEMENT_DATA: IDomaine[] = [
  {id: 1, libelle: 'Hydrogen'},
  {id: 2, libelle: 'Helium'}];

@Component({
  selector: 'app-domaine-liste',
  templateUrl: './domaine-liste.component.html',
  styleUrls: ['./domaine-liste.component.css']
})
export class DomaineListeComponent implements OnInit {
  domaines: IDomaine[];
  displayedColumns:string[] = ['id', 'libelle','star'];
  dataSource :MatTableDataSource<IDomaine>
//domaines: Observable<Domaine[]>;

        constructor(private domaineService: DomaineService,
          private router: Router) {}

        ngOnInit() {
        this.dataSource = new MatTableDataSource<IDomaine>(this.domaines)
          this.reloadData();
        }

        reloadData() {
        let resp = this.domaineService.getDomainesList();
             resp.subscribe(report =>this.dataSource.data = report as IDomaine[])
        }
      applyFilter(event: Event) {
          const filterValue = (event.target as HTMLInputElement).value;
          this.dataSource.filter = filterValue.trim().toLowerCase();
       }
        deleteDomaine(id: number) {
          this.domaineService.deleteDomaine(id)
            .subscribe(
              data => {
                console.log(data);
                this.reloadData();
              },
              error => console.log(error));
        }

        domaineDetails(id: number){
          this.router.navigate(['domaine', id]);
        }

        updateDomaine(id: number){
            this.router.navigate(['updateDomaine', id]);
          }
//c
        addDomaine(){
            this.router.navigate(['adddomaine']);
              }

}
