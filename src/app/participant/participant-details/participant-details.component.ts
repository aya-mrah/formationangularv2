import { Component, OnInit } from '@angular/core';
import {Formateur} from "src/app/model/formateur";
import {Participant} from "src/app/model/Participant";
import {ActivatedRoute, Router} from "@angular/router";
import {FormateurService} from "src/app/service/formateur.service";
import {ParticipantService} from "src/app/service/participant.service";
@Component({
  selector: 'app-participant-details',
  templateUrl: './participant-details.component.html',
  styleUrls: ['./participant-details.component.css']
})
export class ParticipantDetailsComponent implements OnInit {

  id: number;
   participant: Participant;
   constructor(private route: ActivatedRoute,private router: Router,
               private participantService: ParticipantService) { }

   ngOnInit(): void {

     this.participant = new Participant();

     this.id = this.route.snapshot.params['id'];

     this.
     participantService.getParticipant(this.id)
       .subscribe(data => {
         this.participant = data;
       }, error => console.log(error));
   }

   list(){
     this.router.navigate(['participantliste']);
   }

 }
