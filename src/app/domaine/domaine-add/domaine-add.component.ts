import { Component, OnInit } from '@angular/core';
import { DomaineService } from 'src/app/service/domaine.service';
import { Domaine } from 'src/app/model/domaine';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-domaine-add',
  templateUrl: './domaine-add.component.html',
  styleUrls: ['./domaine-add.component.css']
})
export class DomaineAddComponent implements OnInit {

     isValidFormSubmitted = false;
     domaineForm = new FormGroup({
     libelle: new FormControl('', [Validators.minLength(2)])
     });

       domaine: Domaine = new Domaine();
        submitted = false;

        constructor(private domaineService: DomaineService,
          private router: Router,private _snackBar: MatSnackBar) { }

        ngOnInit() {


        }




        newDomaine(): void {
          this.submitted = false;
          this.domaine = new Domaine();
        }

        save() {
          this.domaineService
          .createDomaine(this.domaine).subscribe(data => {
            console.log(data)
            this.domaine = new Domaine();
            this.gotoList();
          },
          error => console.log(error));
        }

        onSubmit() {

           this.isValidFormSubmitted = false;
                        if (this.domaine.libelle.trim().length<2) {
                           return ;
                           }

          this.isValidFormSubmitted = true;
          this.submitted = true;
          this.save();
          this.gotoList();
        }

        gotoList(){
          this.router.navigate(['domaineliste']);
        }
       onReset() {
        this.submitted = false;
        this.domaineForm.reset();
    }
    openSnackBar() {
      this._snackBar.open("Domaine Added !!!", "Ok"
       
      );
    }
}
