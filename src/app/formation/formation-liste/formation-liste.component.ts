import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Formation} from "src/app/model/Formation";
import {Router} from "@angular/router";
import {FormationService } from "src/app/service/formation.service";
import {MatTableDataSource} from '@angular/material/table';

export interface IFormation {
   id: number;
   titre: string;
   type_formation: string;
   nbSession: number;
   annee:number;
   duree: number;
   budget: number;
   domaine: Domaine;

}


const ELEMENT_DATA: IFormation[] = [
 // {id: 12, titre: 'gvfcbhjd',type_formation:'interne',nbSession:100,annee:2022,duree:1,budget:1,domaine:1},
 //{id: 10, titre: 'fbhd,k',type_formation:'externe',nbSession:100,annee:2022,duree:1,budget:1,domaine:1}
  ];

@Component({
  selector: 'app-formation-liste',
  templateUrl: './formation-liste.component.html',
  styleUrls: ['./formation-liste.component.css']
})
export class FormationListeComponent implements OnInit {


  formations : IFormation[];
  displayedColumns:string[] = ['id', 'titre','type_formation', 'nbSession','annee', 'duree','budget', 'domaine','star'];
  dataSource :MatTableDataSource<IFormation>
  constructor(private formationService: FormationService,
              private router: Router) { }


     ngOnInit(): void {
       this.dataSource = new MatTableDataSource<IFormation>(this.formations)
       this.reloadData();
     }

     reloadData() {
       let resp = this.formationService.getFormationsList();
       resp.subscribe(report =>this.dataSource.data = report as IFormation[])

          }



       applyFilter(event: Event) {
                 const filterValue = (event.target as HTMLInputElement).value;
                 this.dataSource.filter = filterValue.trim().toLowerCase();
               }

     updateFormation(id: number){
       this.router.navigate(['updateformation', id]);
     }

     deleteFormation(id: number) {
       this.formationService.deleteFormation(id)
         .subscribe(
           data => {
             console.log(data);
             this.reloadData();
           },
           error => console.log(error));
     }
      formationDetails(id: number){
            this.router.navigate(['formation', id]);
          }

               addFormation(){
               this.router.navigate(['addformation']);
                 }


   }
