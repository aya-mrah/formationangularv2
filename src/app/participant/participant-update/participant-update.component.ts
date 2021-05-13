import { Component, OnInit } from '@angular/core';
import {Participant} from "src/app/model/Participant";
import {ActivatedRoute, Router} from "@angular/router";
import {FormateurService} from "src/app/service/formateur.service";
import {ParticipantService} from "src/app/service/participant.service";
import {Formateur} from "src/app/model/formateur";
import {PaysService} from "src/app/service/pays.service";
import {ProfilService} from "src/app/service/profil.service";
import {OrganismeService} from "src/app/service/organisme.service";
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-participant-update',
  templateUrl: './participant-update.component.html',
  styleUrls: ['./participant-update.component.css']
})
export class ParticipantUpdateComponent implements OnInit {
isValidFormSubmitted = false;
     participantForm = new FormGroup({
     nom: new FormControl('', [Validators.required,Validators.minLength(2)]),
     prenom: new FormControl('', [Validators.required,Validators.minLength(2)]),
     mail: new FormControl('', [Validators.required,Validators.email]),
     tel: new FormControl('', [Validators.required,Validators.min(8)]),
     type: new FormControl('', [Validators.required]),
     organismee: new FormControl('', [Validators.required]),
     paysee: new FormControl('', [Validators.required]),
     profilee: new FormControl('', [Validators.required])
     });
         submitted = false;






 id: number;
  participant: Participant;
  payss: any;
  profils: any;
  organismes: any;
  types: string[] = ['Nationale', 'Internationale'];
  constructor(private route: ActivatedRoute,private router: Router,
              private participantService: ParticipantService,
              private paysService: PaysService,
              private profilService: ProfilService,
              private organismeService: OrganismeService) { }

  ngOnInit(): void {
    this.participant = new Participant();

    this.id = this.route.snapshot.params['id'];

    this.participantService.getParticipant(this.id)
      .subscribe(data => {
        console.log(data)
        this.participant = data;
      }, error => console.log(error));

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

  updateParticipant() {
    this.participantService.updateParticipant(this.id, this.participant)
      .subscribe(data => {
        console.log(data);
        this.participant = new Participant();
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit() {
    this.isValidFormSubmitted = true;
    this.updateParticipant();
    this.gotoList() ;
  }

  gotoList() {
    this.router.navigate(['/participantliste']);
  }
  onReset() {
            this.submitted = false;
             this.participantForm.reset();
                          }
}
