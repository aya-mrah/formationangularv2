import { Component, OnInit, ViewChild } from '@angular/core';
import {Observable} from "rxjs";
import {Router} from "@angular/router";
import {Session} from "src/app/model/session";
import {SessionService} from "src/app/service/session.service";
import {MatTableDataSource} from '@angular/material/table';

import {FormationService} from "src/app/service/formation.service";
import {Formation} from "src/app/model/formation";
import { IFormateur } from 'src/app/formateur/formateur-liste/formateur-liste.component';
import { IOrganisme } from 'src/app/organisme/organisme-liste/organisme-liste.component';
import { ParticipantService } from 'src/app/service/participant.service';
import { Participant } from 'src/app/model/Participant';
import {MatDialog} from '@angular/material/dialog';
import { DialogParticipantSessionComponent } from 'src/app/dialog-participant-session/dialog-participant-session.component';
import { MatPaginator } from '@angular/material/paginator';
import { element } from 'protractor';
import { MatSort } from '@angular/material/sort';


export interface ISession {
    id: number;
    date_deb: Date;
    date_fin: Date;
    nbparticipant: number;
    lieu: string;
    participants:Participant[];
    formation: Formation;
    organisme: IOrganisme;
    formateur: IFormateur;
}



@Component({
  selector: 'app-session-liste',
  templateUrl: './session-liste.component.html',
  styleUrls: ['./session-liste.component.css']
})
export class SessionListeComponent implements OnInit {



  participants !:Participant[];

  par : Participant[]
  sessions : ISession[];
  displayedColumns:string[] = ['id', 'date_deb','date_fin', 'nbparticipant','lieu', 'formation','organisme', 'formateur','participants','star'];
  dataSource :MatTableDataSource<ISession>;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  @ViewChild(MatSort) sort: MatSort;

  constructor(private sessionService: SessionService,
              private router: Router ,
              public dialog: MatDialog
              ) {
              }
              openDialog(element:Participant[]): void {
                const dialogRef = this.dialog.open(DialogParticipantSessionComponent, {
                  width: '500px',
                  data: {participants: element}
                });


              }




  ngOnInit(): void {
        this.dataSource = new MatTableDataSource<ISession>(this.sessions)
        this.reloadData();


  }


  reloadData() {
       let resp = this.sessionService.getSessionsList();
       resp.subscribe(report =>{
         this.dataSource.data = report as ISession[]
         this.sessions = report as ISession[]
         //console.log(this.sessions)

        })
       // console.log(this.sessions[0].participants)
      }


   applyFilter(event: Event) {
          const filterValue = (event.target as HTMLInputElement).value;
          this.dataSource.filter = filterValue.trim().toLowerCase();
        }

  updateSession(id: number){
    this.router.navigate(['updatesession', id]);
  }

  deleteSession(id: number) {
    this.sessionService.deleteSession(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }
  sessionDetails(id: number){
    this.router.navigate(['session', id]);
  }

      addSession(){
          this.router.navigate(['addsession']);
            }


}



