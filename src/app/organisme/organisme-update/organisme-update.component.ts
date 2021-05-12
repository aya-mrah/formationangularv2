import { Component, OnInit } from '@angular/core';
import { Organisme } from 'src/app/model/organisme';
import { ActivatedRoute, Router } from '@angular/router';
import { OrganismeService } from 'src/app/service/organisme.service';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-organisme-update',
  templateUrl: './organisme-update.component.html',
  styleUrls: ['./organisme-update.component.css']
})
export class OrganismeUpdateComponent implements OnInit {


     isValidFormSubmitted = false;
     organismeForm = new FormGroup({
     libelle: new FormControl('', [Validators.minLength(2)])
     });



     id: number;
     organisme: Organisme;
     submitted = false;


     constructor(private route: ActivatedRoute,private router: Router,
       private organismeService: OrganismeService) { }

     ngOnInit() {
       this.organisme = new Organisme();

       this.id = this.route.snapshot.params['id'];

       this.organismeService.getOrganisme(this.id)
         .subscribe(data => {
           console.log(data)
           this.organisme = data;
         }, error => console.log(error));
     }

     updateOrganisme() {
       this.organismeService.updateOrganisme(this.id, this.organisme)
         .subscribe(data => {
           console.log(data);
           this.organisme = new Organisme();
           this.gotoList();
         }, error => console.log(error));
     }

     onSubmit() {


           this.isValidFormSubmitted = false;
                        if (this.organisme.libelle.trim().length<2) {
                           return ;
                           }

          this.isValidFormSubmitted = true;
       this.updateOrganisme();
     }

     gotoList() {
       this.router.navigate(['/organismeliste']);
     }
 onReset() {
                 this.submitted = false;
                 this.organismeForm.reset();
             }

}
