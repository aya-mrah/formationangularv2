import { Component, OnInit } from '@angular/core';
import { Organisme } from 'src/app/model/organisme';
import { Formateur } from 'src/app/model/formateur';
import { ActivatedRoute, Router } from '@angular/router';
import { FormateurService } from 'src/app/service/formateur.service';
import {OrganismeService} from "src/app/service/organisme.service";
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-formateur-update',
  templateUrl: './formateur-update.component.html',
  styleUrls: ['./formateur-update.component.css']
})
export class FormateurUpdateComponent implements OnInit {

     isValidFormSubmitted = false;
     formateurForm = new FormGroup({
            nom: new FormControl('', [Validators.required,Validators.minLength(2)]),
            prenom: new FormControl('', [Validators.required,Validators.minLength(2)]),
            email: new FormControl('', [Validators.required,Validators.email]),
            tel: new FormControl('', [Validators.required,Validators.min(8)]),
            type: new FormControl('', [Validators.required]),
            organismee: new FormControl('', [Validators.required])
     });

         submitted = false;



       id: number;
       formateur: Formateur;
       types: string[] = ['Interne', 'Externe'];
       organismes: any;

       constructor(private route: ActivatedRoute,private router: Router,
         private formateurService: FormateurService,
                   private organismeService: OrganismeService) { }

       ngOnInit() {
         this.formateur = new Formateur();

         this.id = this.route.snapshot.params['id'];

         this.formateurService.getFormateur(this.id)
           .subscribe(data => {
             console.log(data)
             this.formateur = data;
           }, error => console.log(error));

         this.organismeService.getOrganismesList().subscribe(data => {
           this.organismes = data;
         });
       }

       updateFormateur() {
         this.formateurService.updateFormateur(this.id, this.formateur)
           .subscribe(data => {
             console.log(data);
             this.formateur = new Formateur();
             this.gotoList();
           }, error => console.log(error));
       }

       onSubmit() {

              this.isValidFormSubmitted = true;
         this.updateFormateur();
       }

       gotoList() {
         this.router.navigate(['/formateurliste']);
       }
           onReset() {
                            this.submitted = false;
                            this.formateurForm.reset();
                        }

}

