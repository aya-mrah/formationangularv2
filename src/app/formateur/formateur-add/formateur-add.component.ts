import { Component, OnInit } from '@angular/core';
import { FormateurService } from 'src/app/service/formateur.service';
import { Formateur } from 'src/app/model/formateur';
import { Organisme } from 'src/app/model/organisme';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import {OrganismeService} from 'src/app/service/organisme.service';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-formateur-add',
  templateUrl: './formateur-add.component.html',
  styleUrls: ['./formateur-add.component.css']
})
export class FormateurAddComponent implements OnInit {
     isValidFormSubmitted = false;
     formateurForm = new FormGroup({
     nom: new FormControl('', [Validators.required,Validators.minLength(2)]),
     prenom: new FormControl('', [Validators.required,Validators.minLength(2)]),
     email: new FormControl('', [Validators.required,Validators.email]),
     tel: new FormControl('', [Validators.required,Validators.min(8)]),
     type: new FormControl('', [Validators.required]),
     organismee: new FormControl('', [Validators.required])
     });



 formateur: Formateur = new Formateur();
   submitted = false;
   organismes: any;
   currentOrganisme: Organisme;

   constructor(private formateurService: FormateurService,
      private organismeService: OrganismeService,
       private router: Router,private _snackBar: MatSnackBar) {}

   newFormateur(): void {
   this.submitted = false;
   this.formateur = new Formateur();
   }

   save(){
   this.formateurService
   .createFormateur(this.formateur).subscribe(data => {
   console.log(data);
   this.gotoList();
   },
   error => console.log(error));
   }

   setNewOrganisme(organisme: Organisme): void {
     console.log(organisme);
     this.currentOrganisme = organisme;
   }



   onSubmit() {


           this.isValidFormSubmitted = false;
                        if (this.formateur.nom.trim().length<2) {
                           return ;
                           }
                            if (this.formateur.prenom.trim().length<2) {
                              return ; }


                    this.isValidFormSubmitted = true;
                    this.submitted = true;
                    this.save();
                    this.gotoList();

   }

   gotoList() {
   this.router.navigate(['/formateurliste']);
   }

   ngOnInit(): void {
   this.organismeService.getOrganismesList().subscribe(data => {
   this.organismes = data;
   });
   }
   onReset() {
                  this.submitted = false;
                  this.formateurForm.reset();
              }
              openSnackBar() {
                this._snackBar.open("Formateur Added !!!", "Ok"
                 
                );
              }
 }
