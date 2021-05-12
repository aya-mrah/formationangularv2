import { Component, OnInit } from '@angular/core';
import { ProfilService } from 'src/app/service/profil.service';
import { Profil } from 'src/app/model/profil';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-profil-add',
  templateUrl: './profil-add.component.html',
  styleUrls: ['./profil-add.component.css']
})
export class ProfilAddComponent implements OnInit {


     isValidFormSubmitted = false;
     profilForm = new FormGroup({
     libelle: new FormControl('', [Validators.minLength(2)])
     });

  profil: Profil = new Profil();
      submitted = false;

      constructor(private profilService: ProfilService,
        private router: Router) { }

      ngOnInit() {
      }

      newProfil(): void {
        this.submitted = false;
        this.profil = new Profil();
      }

      save() {
        this.profilService
        .createProfil(this.profil).subscribe(data => {
          console.log(data)
          this.profil = new Profil();
          this.gotoList();
        },
        error => console.log(error));
      }

      onSubmit() {

       this.isValidFormSubmitted = false;
                              if (this.profil.libelle.trim().length<2) {
                                 return ;
                                 }

                this.isValidFormSubmitted = true;
                this.submitted = true;
                this.save();
                this.gotoList();

      }

      gotoList() {
        this.router.navigate(['profileliste']);
      }
      onReset() {
              this.submitted = false;
              this.profilForm.reset();
          }

}
