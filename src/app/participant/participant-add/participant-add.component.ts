import { Component, OnInit } from '@angular/core';
import {ParticipantService} from "src/app/service/participant.service";
import {Participant} from "src/app/model/Participant";
import {Router} from "@angular/router";
import {Organisme} from "src/app//model/organisme";
import {OrganismeService} from "src/app/service/organisme.service";
import {PaysService} from "src/app/service/pays.service";
import {Pays} from "src/app//model/pays";
import {Profil} from "src/app//model/profil";
import {ProfilService} from "src/app//service/profil.service";
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';


interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-participant-add',
  templateUrl: './participant-add.component.html',
  styleUrls: ['./participant-add.component.css']
})


export class ParticipantAddComponent implements OnInit {
 isValidFormSubmitted = false;
     participantForm = new FormGroup({
     nom: new FormControl('', [Validators.required,Validators.minLength(2)]),
     prenom: new FormControl('', [Validators.required,Validators.minLength(2)]),
     mail: new FormControl('', [Validators.required,Validators.email]),
     tel: new FormControl('', [Validators.required,Validators.min(8)]),
     type: new FormControl('', [Validators.required]),
     organismee: new FormControl('', [Validators.required]),
     payse: new FormControl('', [Validators.required]),
     profilee: new FormControl('', [Validators.required])
     });



participant: Participant = new Participant();
  submitted = false;
  payss: any;
  currentPays: Pays;

  profils: any;
  currentProfil: Profil;

  organismes: any;
   currentOrganisme: Organisme;
  constructor(private participantService: ParticipantService,
              private paysService: PaysService,
              private profilService: ProfilService,
              private organismeService: OrganismeService,
              private router: Router) { }

  save() {
    this.participant.type="International"
    this.participantService
      .createParticipant(this.participant).subscribe(data => {
        this.participant = new Participant();

        this.gotoList();
      },
      error => console.log(error));
  }

  setNewPays(pays: Pays): void {
    console.log(pays);
    this.currentPays = pays;
  }

  setNewProfil(profil: Profil): void {
    console.log(profil);
    this.currentProfil = profil;
  }

   setNewOrganisme(organisme: Organisme): void {
      console.log(organisme);
      this.currentOrganisme = organisme;
    }

  onSubmit() {

                      this.isValidFormSubmitted = true;
                      this.submitted = true;
                      this.save();
                      this.gotoList();

  }

  gotoList() {
    this.router.navigate(['/participantliste']);
  }
    onReset() {
                    this.submitted = false;
                    this.participantForm.reset();
                }

  ngOnInit(): void {
    this.paysService.getPayssList().subscribe(data => {
      this.payss = data;
    });
    this.profilService.getProfilsList().subscribe(data => {
      this.profils = data;
    });

    this.organismeService.getOrganismesList().subscribe(data => {
      this.organismes = data;
    });
  }


}
