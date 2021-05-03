import { Component, OnInit } from '@angular/core';
import { Profil } from 'src/app/model/profil';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfilService } from 'src/app/service/profil.service';

@Component({
  selector: 'app-profil-update',
  templateUrl: './profil-update.component.html',
  styleUrls: ['./profil-update.component.css']
})
export class ProfilUpdateComponent implements OnInit {

 id: number;
         profil: Profil;

         constructor(private route: ActivatedRoute,private router: Router,
           private profilService: ProfilService) { }

         ngOnInit() {
           this.profil = new Profil();

           this.id = this.route.snapshot.params['id'];

           this.profilService.getProfil(this.id)
             .subscribe(data => {
               console.log(data)
               this.profil = data;
             }, error => console.log(error));
         }

         updateProfil() {
           this.profilService.updateProfil(this.id, this.profil)
             .subscribe(data => {
               console.log(data);
               this.profil = new Profil();
               this.gotoList();
             }, error => console.log(error));
         }

         onSubmit() {
           this.updateProfil();
         }

         gotoList() {
           this.router.navigate(['/profileliste']);
         }
}
