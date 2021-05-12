import { Component, OnInit } from '@angular/core';
import { Pays } from 'src/app/model/pays';
import { ActivatedRoute, Router } from '@angular/router';
import { PaysService } from 'src/app/service/pays.service';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-pays-update',
  templateUrl: './pays-update.component.html',
  styleUrls: ['./pays-update.component.css']
})
export class PaysUpdateComponent implements OnInit {

  isValidFormSubmitted = false;
     paysForm = new FormGroup({
     libelle: new FormControl('', [Validators.minLength(2)])
     });


           id: number;
           pays: any;
           submitted = false;


           constructor(private route: ActivatedRoute,private router: Router,
             private paysService: PaysService) { }

           ngOnInit() {
             this.pays = new Pays();

             this.id = this.route.snapshot.params['id'];

             this.paysService.getPays(this.id)
               .subscribe(data => {
                 console.log(data)
                 this.pays = data;
               }, error => console.log(error));
           }

           updatePays() {
             this.paysService.updatePays(this.id, this.pays)
               .subscribe(data => {
                 console.log(data);
                 this.pays = new Pays();
                 this.gotoList();
               }, error => console.log(error));
           }
           //cc

           onSubmit() {

           this.isValidFormSubmitted = false;
                        if (this.pays.libelle.trim().length<2) {
                           return ;
                           }

          this.isValidFormSubmitted = true;
             this.updatePays();
           }

           gotoList() {
             this.router.navigate(['/paysliste']);
           }
            onReset() {
                            this.submitted = false;
                            this.paysForm.reset();
                        }

}
