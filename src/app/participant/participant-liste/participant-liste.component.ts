import { Component, OnInit } from '@angular/core';
import { Participant } from "src/app/model/Participant";
import { Profil } from 'src/app/model/profil';
import { Pays } from 'src/app/model/pays';
import {Organisme} from "src/app/model/organisme";
import {Router} from "@angular/router";
import {ParticipantService} from "src/app/service/participant.service";
import {Observable} from "rxjs";
import {MatTableDataSource} from '@angular/material/table';


export interface IParticipant {
 id: number;
 nom: string;
 prenom: string;
 tel: number;
 mail: string;
 profil: Profil;
 pays: Pays;
 organisme: Organisme;


}
const ELEMENT_DATA: IParticipant[] = [
];

@Component({
  selector: 'app-participant-liste',
  templateUrl: './participant-liste.component.html',
  styleUrls: ['./participant-liste.component.css']
})
export class ParticipantListeComponent implements OnInit {
  participants: IParticipant[];
  displayedColumns:string[] = ['id', 'nom','prenom','mail','tel','type','profil','pays','organisme','star'];
  dataSource :MatTableDataSource<IParticipant>
 // participants: Observable<Participant[]>;

    constructor(private participantService: ParticipantService,
                private router: Router) { }

 ngOnInit() {
      this.dataSource = new MatTableDataSource<IParticipant>(this.participants)
      this.reloadData();
        }

        //cc

    reloadData() {
     let resp = this.participantService.getParticipantsList();
     resp.subscribe(report =>this.dataSource.data = report as IParticipant[])


      }
      applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
      }
/*
    ngOnInit(): void {
      this.reloadData();
    }

    reloadData() {
      this.participants = this.participantService.getParticipantsList();
      console.log(this.participants);
    }*/

    updateParticipant(id: number){
      this.router.navigate(['updateparticipant', id]);
    }

    deleteParticipant(id: number) {
      this.participantService.deleteParticipant(id)
        .subscribe(
          data => {
            console.log(data);
            this.reloadData();
          },
          error => console.log(error));
    }
    participantDetails(id: number){
      this.router.navigate(['participant', id]);
    }
     addParticipant(){
                this.router.navigate(['addparticipant']);
                  }
  }

