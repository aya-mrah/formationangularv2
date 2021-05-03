import { Organisme } from 'src/app/model/organisme';
import { Component, OnInit, Input } from '@angular/core';
import { OrganismeService } from 'src/app/service/organisme.service';
import { OrganismeListeComponent } from 'src/app/organisme/organisme-liste/organisme-liste.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-organisme-details',
  templateUrl: './organisme-details.component.html',
  styleUrls: ['./organisme-details.component.css']
})
export class OrganismeDetailsComponent implements OnInit {

      id: number;
      organisme: Organisme;

      constructor(private route: ActivatedRoute,private router: Router,
        private organismeService: OrganismeService) { }

      ngOnInit() {
        this.organisme = new Organisme();

        this.id = this.route.snapshot.params['id'];

        this.organismeService.getOrganisme(this.id)
          .subscribe(data => {
            console.log(data)
            this.organisme = data;
          }, error => console.log(error));
      }

      list(){
        this.router.navigate(['organismeliste']);
      }
}
