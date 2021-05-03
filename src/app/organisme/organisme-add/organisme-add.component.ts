import { Component, OnInit } from '@angular/core';
import { OrganismeService } from 'src/app/service/organisme.service';
import { Organisme } from 'src/app/model/organisme';
import { Router } from '@angular/router';
@Component({
  selector: 'app-organisme-add',
  templateUrl: './organisme-add.component.html',
  styleUrls: ['./organisme-add.component.css']
})
export class OrganismeAddComponent implements OnInit {


   organisme: Organisme = new Organisme();
    submitted = false;

    constructor(private organismeService: OrganismeService,
      private router: Router) { }

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
      this.submitted = true;
      this.save();
    }

    gotoList() {
      this.router.navigate(['/organismeliste']);
    }
}
