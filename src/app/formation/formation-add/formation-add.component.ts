import { Component, OnInit } from '@angular/core';
import {Formation} from "src/app/model/Formation";
import {ParticipantService} from "src/app/service/participant.service";
import {FormationService} from "src/app/service/formation.service";
import {Router} from "@angular/router";
import {Pays} from "src/app/model/pays";
import {Domaine} from "src/app/model/domaine";
import {DomaineService} from "src/app/service/domaine.service";


@Component({
  selector: 'app-formation-add',
  templateUrl: './formation-add.component.html',
  styleUrls: ['./formation-add.component.css']
})
export class FormationAddComponent implements OnInit {

       formation: Formation = new Formation();
       submitted = false;
       domaines: any;
       currentDomaine: Domaine;

       constructor(private formationService: FormationService,
                   private domaineService: DomaineService,
                   private router: Router) { }


       save() {
         this.formationService
           .createFormation(this.formation).subscribe(data => {
             this.formation = new Formation();
             this.gotoList();
           },
           error => console.log(error));
       }
       onSubmit() {
         this.submitted = true;
         this.save();
       }
       setNewDomaine(domaine: Domaine): void {
         console.log(domaine);
         this.currentDomaine = domaine;
       }
       gotoList() {
         this.router.navigate(['/formationliste']);
       }

       ngOnInit(): void {
         this.domaineService.getDomainesList().subscribe(data => {
           this.domaines = data;
         });
       }
     }
