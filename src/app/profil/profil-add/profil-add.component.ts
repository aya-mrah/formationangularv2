import { Component, OnInit } from '@angular/core';
import { ProfilService } from 'src/app/service/profil.service';
import { Profil } from 'src/app/model/profil';
import { Router } from '@angular/router';
@Component({
  selector: 'app-profil-add',
  templateUrl: './profil-add.component.html',
  styleUrls: ['./profil-add.component.css']
})
export class ProfilAddComponent implements OnInit {


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
        this.submitted = true;
        this.save();
      }

      gotoList() {
        this.router.navigate(['profileliste']);
      }

}
