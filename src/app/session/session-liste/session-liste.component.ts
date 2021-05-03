import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Router} from "@angular/router";
import {Session} from "src/app/model/session";
import {SessionService} from "src/app/service/session.service";
import {MatTableDataSource} from '@angular/material/table';

import {FormationService} from "src/app/service/formation.service";
import {Formation} from "src/app/model/formation";


export interface ISession {
    id: number;
    date_deb: Date;
    date_fin: Date;
    nbparticipant: number;
    lieu: string;

    formation: Formation;
    organisme: Organisme;
    formateur: Formateur;
}
const ELEMENT_DATA: ISession[] = [
  {id: 12, date_deb: 1235,date_fin:65,nbparticipant:100,lieu:'sfax2',formation:1,organisme:1,formateur:1},
 {id: 9, date_deb: 845,date_fin:1454,nbparticipant:12,lieu:'Djerba',formation:1,organisme:1,formateur:1}];


@Component({
  selector: 'app-session-liste',
  templateUrl: './session-liste.component.html',
  styleUrls: ['./session-liste.component.css']
})
export class SessionListeComponent implements OnInit {


  sessions : ISession[];
  displayedColumns:string[] = ['id', 'date_deb','date_fin', 'nbparticipant','lieu', 'formation','organisme', 'formateur','star'];
  dataSource :MatTableDataSource<ISession>
  constructor(private sessionService: SessionService,
              private router: Router) { }


  ngOnInit(): void {
        this.dataSource = new MatTableDataSource<ISession>(this.sessions)
        this.reloadData();
  }

  reloadData() {
       let resp = this.sessionService.getSessionsList();
       resp.subscribe(report =>this.dataSource.data = report as ISession[])
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
