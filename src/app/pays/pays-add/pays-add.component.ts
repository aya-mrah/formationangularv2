import { Component, OnInit } from '@angular/core';
import { PaysService } from 'src/app/service/pays.service';
import { Pays } from 'src/app/model/pays';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-pays-add',
  templateUrl: './pays-add.component.html',
  styleUrls: ['./pays-add.component.css']
})
export class PaysAddComponent implements OnInit {

  selectedFile!: File;
  pays: Pays = new Pays();
        submitted = false;

        constructor(private paysService: PaysService,
          private router: Router ,private httpClient : HttpClient) { }

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
          this.savePays();
          this.gotoList();
        }

        gotoList() {
          this.router.navigate(['/paysliste']);
        }
        public onFileChanged(event:Event) {
          let file = (<HTMLInputElement>event.target).files;
          console.log(file)
          this.selectedFile = file?.item(0) as File
          console.log(this.selectedFile)
        }
        
savePays() {
//console.log("Fie to upload : "+this.selectedFile.name);
const uploadPays = new FormData();
uploadPays.set('imageFile',this.selectedFile)
uploadPays.set('libelle',this.pays.libelle)
this.httpClient.post('http://localhost:8090/addpays',uploadPays).subscribe(
  (response) => {

  console.log(response);
  },
  (err) => {
  console.log('erreur '+err);
  }
  )
  }
}

