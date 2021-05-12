import { Component, OnInit } from '@angular/core';
import { Domaine } from 'src/app/model/domaine';
import { ActivatedRoute, Router } from '@angular/router';
import { DomaineService } from 'src/app/service/domaine.service';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-domaine-update',
  templateUrl: './domaine-update.component.html',
  styleUrls: ['./domaine-update.component.css']
})
export class DomaineUpdateComponent implements OnInit {


     isValidFormSubmitted = false;
     domaineForm = new FormGroup({
     libelle: new FormControl('', [Validators.minLength(2)])
     });

         id: number;
         domaine: Domaine;
         submitted = false;


         constructor(private route: ActivatedRoute,private router: Router,
           private domaineService: DomaineService) { }

         ngOnInit() {
           this.domaine = new Domaine();

           this.id = this.route.snapshot.params['id'];

           this.domaineService.getDomaine(this.id)
             .subscribe(data => {
               console.log(data)
               this.domaine = data;
             }, error => console.log(error));
         }

         updateDomaine() {
           this.domaineService.updateDomaine(this.id, this.domaine)
             .subscribe(data => {
               console.log(data);
               this.domaine = new Domaine();
               this.gotoList();
             }, error => console.log(error));
         }

         onSubmit() {


           this.isValidFormSubmitted = false;
                        if (this.domaine.libelle.trim().length<2) {
                           return ;
                           }

          this.isValidFormSubmitted = true;
           this.updateDomaine();
         }

         gotoList() {
           this.router.navigate(['/domaineliste']);
         }
          onReset() {
                 this.submitted = false;
                 this.domaineForm.reset();
             }


}
