import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

import {SessionService} from "src/app/service/session.service";
import {Session} from "src/app/model/session";
@Component({
  selector: 'app-session-details',
  templateUrl: './session-details.component.html',
  styleUrls: ['./session-details.component.css']
})
export class SessionDetailsComponent implements OnInit {
  id: number;
  session: Session;
  constructor(private route: ActivatedRoute,private router: Router,
              private sessionService: SessionService) { }

  ngOnInit(): void {

    this.session = new Session();

    this.id = this.route.snapshot.params['id'];

    this.
    sessionService.getSession(this.id)
      .subscribe(data => {
        this.session = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['sessionliste']);
  }


}
