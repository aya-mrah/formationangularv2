import { Component, OnInit } from '@angular/core';
import {Participant} from "src/app/model/Participant";
import {ActivatedRoute, Router} from "@angular/router";
import {FormateurService} from "src/app/service/formateur.service";
import {ParticipantService} from "src/app/service/participant.service";
import {Formateur} from "src/app/model/formateur";
import {PaysService} from "src/app/service/pays.service";
import {ProfilService} from "src/app/service/profil.service";
import {OrganismeService} from "src/app/service/organisme.service";

@Component({
  selector: 'app-participant-update',
  templateUrl: './participant-update.component.html',
  styleUrls: ['./participant-update.component.css']
})
export class ParticipantUpdateComponent implements OnInit {
 id: number;
  participant: Participant;
  payss: any;
  profils: any;
  organismes: any;
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
    this.updateParticipant();
  }

  gotoList() {
    this.router.navigate(['/participantliste']);
  }
}
