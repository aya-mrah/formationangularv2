import { Component, OnInit } from '@angular/core';
import { FormateurService } from 'src/app/service/formateur.service';
import { Formateur } from 'src/app/model/formateur';
import { Organisme } from 'src/app/model/organisme';
import { Router } from '@angular/router';

import {OrganismeService} from 'src/app/service/organisme.service';
@Component({
  selector: 'app-formateur-add',
  templateUrl: './formateur-add.component.html',
  styleUrls: ['./formateur-add.component.css']
})
export class FormateurAddComponent implements OnInit {

 formateur: Formateur = new Formateur();
   submitted = false;
   organismes: any;
   currentOrganisme: Organisme;

   constructor(private formateurService: FormateurService,  private organismeService: OrganismeService, private router: Router) {}

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
   this.submitted = true;
   console.log(this.formateur);
   this.save();
   }

   gotoList() {
   this.router.navigate(['/formateurliste']);
   }

   ngOnInit(): void {
   this.organismeService.getOrganismesList().subscribe(data => {
   this.organismes = data;
   });
   }

 }
