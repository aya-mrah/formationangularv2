import { Component, OnInit } from '@angular/core';
import { OrganismeService } from 'src/app/service/organisme.service';
import { Organisme } from 'src/app/model/organisme';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-organisme-add',
  templateUrl: './organisme-add.component.html',
  styleUrls: ['./organisme-add.component.css']
})
export class OrganismeAddComponent implements OnInit {


     isValidFormSubmitted = false;
       organismeForm = new FormGroup({
       libelle: new FormControl('', [Validators.minLength(2)])
       });

   organisme: Organisme = new Organisme();
    submitted = false;

    constructor(private organismeService: OrganismeService,
      private router: Router,private _snackBar: MatSnackBar) { }

    ngOnInit() {
    }

    newOrganisme(): void {
      this.submitted = false;
      this.organisme = new Organisme();
    }

    save() {
      this.organismeService
      .createOrganisme(this.organisme).subscribe(data => {
        console.log(data)
        this.organisme = new Organisme();
        this.gotoList();
      },
      error => console.log(error));
    }

    onSubmit() {


           this.isValidFormSubmitted = false;
                        if (this.organisme.libelle.trim().length<2) {
                           return ;
                           }

          this.isValidFormSubmitted = true;
          this.submitted = true;
          this.save();
          this.gotoList();

    }

    gotoList() {
      this.router.navigate(['/organismeliste']);
    }

     onReset() {
            this.submitted = false;
            this.organismeForm.reset();
        }

        openSnackBar() {
          this._snackBar.open("Organisme Added !!!", "Ok"
           
          );
        }
}
