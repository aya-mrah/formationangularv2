
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Formation} from "src/app/model/Formation";
import {FormationService} from "src/app/service/formation.service";
@Component({
  selector: 'app-formation-details',
  templateUrl: './formation-details.component.html',
  styleUrls: ['./formation-details.component.css']
})
export class FormationDetailsComponent implements OnInit {

    id: number;
    formation: Formation;
    constructor(private route: ActivatedRoute,private router: Router,
                private formationService: FormationService) { }

    ngOnInit(): void {

      this.formation = new Formation();

      this.id = this.route.snapshot.params['id'];

      this.
      formationService.getFormation(this.id)
        .subscribe(data => {
          this.formation = data;
        }, error => console.log(error));
    }

    list(){
      this.router.navigate(['formationliste']);
    }


  }
