import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Formation} from "src/app/model/Formation";
import { FormationService } from "src/app/service/formation.service";
import {DomaineService} from "src/app/service/domaine.service";
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-formation-update',
  templateUrl: './formation-update.component.html',
  styleUrls: ['./formation-update.component.css']
})
export class FormationUpdateComponent implements OnInit {


     isValidFormSubmitted = false;
     formationForm = new FormGroup({
          titre: new FormControl('', [Validators.required,Validators.minLength(2)]),
          type: new FormControl('', [Validators.required]),
          annee: new FormControl('', [Validators.required]),
          nbSession: new FormControl('', [Validators.required]),
          duree: new FormControl('', [Validators.required]),
          budget: new FormControl('', [Validators.required]),
          domainee: new FormControl('', [Validators.required])
     });

         submitted = false;

   id: number;
    formation: Formation;
    domaines: any;
  types: string[] = ['Nationale', 'Internationale'];

    constructor(private route: ActivatedRoute,private router: Router,
                private domaineService: DomaineService,
                private formationService: FormationService) { }

    ngOnInit(): void {
      this.formation = new Formation();

      this.id = this.route.snapshot.params['id'];

      this.formationService.getFormation(this.id)
        .subscribe(data => {
          console.log(data)
          this.formation = data;
        }, error => console.log(error));

      this.domaineService.getDomainesList().subscribe(data => {
        this.domaines = data;
      });
    }

    updateFormation() {
      this.formationService.updateFormation(this.id, this.formation)
        .subscribe(data => {
          console.log(data);
          this.formation= new Formation();
          this.gotoList();
        }, error => console.log(error));
    }

    onSubmit() {


             this.isValidFormSubmitted = true;
             this.updateFormation();
    }

    gotoList() {
      this.router.navigate(['/formationliste']);
    }
    onReset() {
                     this.submitted = false;
                     this.formationForm.reset();
                 }

  }
