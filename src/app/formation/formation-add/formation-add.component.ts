import { Component, OnInit } from '@angular/core';
import {Formation} from "src/app/model/Formation";
import {ParticipantService} from "src/app/service/participant.service";
import {FormationService} from "src/app/service/formation.service";
import {Router} from "@angular/router";
import {Pays} from "src/app/model/pays";
import {Domaine} from "src/app/model/domaine";
import {DomaineService} from "src/app/service/domaine.service";
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-formation-add',
  templateUrl: './formation-add.component.html',
  styleUrls: ['./formation-add.component.css']
})
export class FormationAddComponent implements OnInit {
 isValidFormSubmitted = false;
     formationForm = new FormGroup({
     titre: new FormControl('', [Validators.required,Validators.minLength(2)]),
     type: new FormControl('', [Validators.required]),
     annee: new FormControl('', [Validators.required]),
     nbSession: new FormControl('', [Validators.required]),
     duree: new FormControl('', [Validators.required]),
     budget: new FormControl('', [Validators.required]),
     domainee: new FormControl('', [Validators.required])
     });



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
       if (this.formationForm.invalid) {
                   return;
               }
                 this.isValidFormSubmitted = true;
                 this.submitted = true;
                 this.save();
                 this.gotoList();

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
         onReset() {
               this.submitted = false;
               this.formationForm.reset();
           }
     }
