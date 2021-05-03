import { Profil } from 'src/app/model/profil';
import { Component, OnInit, Input } from '@angular/core';
import { ProfilService } from 'src/app/service/profil.service';
//import { ProfilListComponent } from 'src/app/profil/profil-list/profil-list.component';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-profil-details',
  templateUrl: './profil-details.component.html',
  styleUrls: ['./profil-details.component.css']
})
export class ProfilDetailsComponent implements OnInit {


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

            list(){
              this.router.navigate(['profileliste']);
            }

}
