import { Component, OnInit } from '@angular/core';
import { PaysService } from 'src/app/service/pays.service';
import { Pays } from 'src/app/model/pays';
import { Router } from '@angular/router';
@Component({
  selector: 'app-pays-add',
  templateUrl: './pays-add.component.html',
  styleUrls: ['./pays-add.component.css']
})
export class PaysAddComponent implements OnInit {


  pays: Pays = new Pays();
        submitted = false;

        constructor(private paysService: PaysService,
          private router: Router) { }

        ngOnInit() {
        }

        newPays(): void {
          this.submitted = false;
          this.pays = new Pays();
        }

        save() {
          this.paysService
          .createPays(this.pays).subscribe(data => {
            console.log(data)
            this.pays = new Pays();
            this.gotoList();
          },
          error => console.log(error));
        }

        onSubmit() {
          this.submitted = true;
          this.save();
        }

        gotoList() {
          this.router.navigate(['/paysliste']);
        }


}
