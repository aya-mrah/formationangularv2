  import { Formateur } from 'src/app/model/formateur';
import { Organisme } from 'src/app/model/organisme';
import { Component, OnInit, Input } from '@angular/core';
import { FormateurService } from 'src/app/service/formateur.service';
import { FormateurListeComponent } from 'src/app/formateur/formateur-liste/formateur-liste.component';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-formateur-details',
  templateUrl: './formateur-details.component.html',
  styleUrls: ['./formateur-details.component.css']
})
export class FormateurDetailsComponent implements OnInit {
  id: number;
        formateur: Formateur;

        constructor(private route: ActivatedRoute,private router: Router,
          private formateurService: FormateurService) { }

        ngOnInit() {
          this.formateur = new Formateur();

          this.id = this.route.snapshot.params['id'];

          this.formateurService.getFormateur(this.id)
            .subscribe(data => {
              console.log(data)
              this.formateur = data;
            }, error => console.log(error));
        }

        list(){
          this.router.navigate(['formateurliste']);
        }


}
