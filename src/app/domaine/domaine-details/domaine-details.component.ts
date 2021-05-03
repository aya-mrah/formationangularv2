import { Domaine } from 'src/app/model/domaine';
import { Component, OnInit, Input } from '@angular/core';
import { DomaineService } from 'src/app/service/domaine.service';
import { Router, ActivatedRoute } from '@angular/router';
import { DomaineListeComponent } from 'src/app/domaine/domaine-liste/domaine-liste.component';
@Component({
  selector: 'app-domaine-details',
  templateUrl: './domaine-details.component.html',
  styleUrls: ['./domaine-details.component.css']
})
export class DomaineDetailsComponent implements OnInit {

            id: number;
            domaine: Domaine;

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

      /*      list(){
              this.router.navigate(['domaines']);
            }*/

}
