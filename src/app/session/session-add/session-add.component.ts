import { Component, OnInit } from '@angular/core';
import {FormationService} from "src/app/service/formation.service";
import {Router} from "@angular/router";
import {Session} from "src/app//model/session";
import {SessionService} from "src/app//service/session.service";
import {Profil} from "src/app//model/profil";
import {Formation} from "src/app//model/Formation";
import {Organisme} from "src/app//model/organisme";
import {Formateur} from "src/app//model/formateur";
import {OrganismeService} from "src/app//service/organisme.service";
import {FormateurService} from "src/app//service/formateur.service";
import {Pays} from "src/app//model/pays";
@Component({
  selector: 'app-session-add',
  templateUrl: './session-add.component.html',
  styleUrls: ['./session-add.component.css']
})
export class SessionAddComponent implements OnInit {

session: Session = new Session();
  submitted = false;

  formations: any;
  currentFormation: Formation;

  organismes: any;
  currentOrganisme: Organisme;

  formateurs: any;
  currentFormateur: Formateur;

  constructor(private sessionService: SessionService,
              private formationService: FormationService,
              private organismeService: OrganismeService,
              private formateurService: FormateurService,
              private router: Router) { }


  save() {
    this.sessionService
      .createSession(this.session).subscribe(data => {
        this.session = new Session();
        this.gotoList();
      },
      error => console.log(error));
  }

  setNewFormation(formation: Formation): void {
    console.log(formation);
    this.currentFormation = formation;
  }


  setNewOrganisme(organisme: Organisme): void {
    console.log(organisme);
    this.currentOrganisme = organisme;
  }


  setNewFormateur(formateur: Formateur): void {
    console.log(formateur);
    this.currentFormateur = formateur;
  }
  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['/sessionliste']);
  }

  ngOnInit(): void {
    this.organismeService.getOrganismesList().subscribe(data => {
      this.organismes = data;
    });


    this.formateurService.getFormateursList().subscribe(data => {
      this.formateurs = data;
    });

    this.formationService.getFormationsList().subscribe(data => {
      this.formations = data;
    });
  }
}
