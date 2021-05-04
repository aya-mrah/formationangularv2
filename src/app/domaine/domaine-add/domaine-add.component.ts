import { Component, OnInit } from '@angular/core';
import { DomaineService } from 'src/app/service/domaine.service';
import { Domaine } from 'src/app/model/domaine';
import { Router } from '@angular/router';

@Component({
  selector: 'app-domaine-add',
  templateUrl: './domaine-add.component.html',
  styleUrls: ['./domaine-add.component.css']
})
export class DomaineAddComponent implements OnInit {
domaine: Domaine = new Domaine();
        submitted = false;

        constructor(private domaineService: DomaineService,
          private router: Router) { }

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
          this.submitted = true;
          this.save();
          this.gotoList();
        }

        gotoList(){
          this.router.navigate(['domaineliste']);
        }


}
