import { Pays } from 'src/app/model/pays';
import { Component, OnInit, Input } from '@angular/core';
import { PaysService } from 'src/app/service/pays.service';
import { PaysListeComponent } from 'src/app/pays/pays-liste/pays-liste.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pays-details',
  templateUrl: './pays-details.component.html',
  styleUrls: ['./pays-details.component.css']
})
export class PaysDetailsComponent implements OnInit {

             id: number;
             pays: Pays;

             constructor(private route: ActivatedRoute,private router: Router,
               private paysService: PaysService) { }

             ngOnInit() {
               this.pays = new Pays();

               this.id = this.route.snapshot.params['id'];

               this.paysService.getPays(this.id)
                 .subscribe(data => {
                   console.log(data)
                   this.pays = data;
                 }, error => console.log(error));
             }

             list(){
               this.router.navigate(['paysliste']);
             }
}
