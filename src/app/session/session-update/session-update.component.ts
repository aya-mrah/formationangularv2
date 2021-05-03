import { Component, OnInit } from '@angular/core';
import {Session} from "src/app/model/session";
import {ActivatedRoute, Router} from "@angular/router";
import {SessionService} from "src/app/service/session.service";
import {Formation} from "src/app/model/Formation";
import {Organisme} from "src/app/model/organisme";
import {Formateur} from "src/app/model/formateur";
import {FormationService} from "src/app/service/formation.service";
import {OrganismeService} from "src/app/service/organisme.service";
import {FormateurService} from "src/app/service/formateur.service";
@Component({
  selector: 'app-session-update',
  templateUrl: './session-update.component.html',
  styleUrls: ['./session-update.component.css']
})
export class SessionUpdateComponent implements OnInit {
 id: number;
  session: Session;

  formations: any;

  organismes: any;

  formateurs: any;

  constructor(private route: ActivatedRoute,private router: Router,
              private sessionService: SessionService,
              private formationService: FormationService,
              private organismeService: OrganismeService,
              private formateurService: FormateurService) { }

  ngOnInit(): void {
    this.session = new Session();

    this.id = this.route.snapshot.params['id'];

    this.sessionService.getSession(this.id)
      .subscribe(data => {
        console.log(data)
        this.session = data;
      }, error => console.log(error));


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

  updateSession() {
    this.sessionService.updateSession(this.id, this.session)
      .subscribe(data => {
        console.log(data);
        this.session = new Session();
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit() {
    this.updateSession();
  }

  gotoList() {
    this.router.navigate(['/sessionliste']);
  }
}
