import { Pays } from 'src/app/model/pays';
import { Component, OnInit, Input } from '@angular/core';
import { PaysService } from 'src/app/service/pays.service';
import { PaysListeComponent } from 'src/app/pays/pays-liste/pays-liste.component';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pays-details',
  templateUrl: './pays-details.component.html',
  styleUrls: ['./pays-details.component.css']
})
export class PaysDetailsComponent implements OnInit {
  libelle!:string;
retrievedImage: any;
base64Data: any;
retrieveResonse: any;

             id: number;
             pays: any;

             constructor(private route: ActivatedRoute,private router: Router,
               private paysService: PaysService ,private httpClient : HttpClient) { }

             ngOnInit() {
               this.pays = new Pays();

               this.id = this.route.snapshot.params['id'];

               this.paysService.getPays(this.id)
                 .subscribe(data => {
                   console.log(data)
                   this.pays = data;
                 }, error => console.log(error));
            this.getPay()
                }

             list(){
               this.router.navigate(['paysliste']);
             }

             getPay() {
              this.httpClient.get('http://localhost:8090/pays/'+this.id)
              .subscribe(
              res => {
              this.retrieveResonse = res;
              this.libelle = this.retrieveResonse.libelle;
              this.base64Data = this.retrieveResonse.picByte;
              this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
              console.log('image affichée avec succès...');
              },
              error => {
              console.log('image non trouvée '+error);
              }
              );
              }
}
