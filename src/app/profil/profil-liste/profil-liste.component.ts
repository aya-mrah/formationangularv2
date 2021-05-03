import { Component, OnInit } from '@angular/core';
//import { ProfilDetailsComponent } from 'src/app/profil-details/profil-details.component';
import { Observable } from "rxjs";
import { ProfilService } from "src/app/service/profil.service";
import { Profil} from "src/app/model/profil";
import { Router } from '@angular/router';
import {MatTableDataSource} from '@angular/material/table';

export interface IProfil {
  id: number;
  libelle: string;

}
const ELEMENT_DATA: IProfil[] = [
  //{id: 1, libelle: 'Hydrogen'},
 // {id: 2, libelle: 'Helium'}
  ];


@Component({
  selector: 'app-profil-liste',
  templateUrl: './profil-liste.component.html',
  styleUrls: ['./profil-liste.component.css']
})
export class ProfilListeComponent implements OnInit {
  profils: IProfil[];
  displayedColumns:string[] = ['id', 'libelle','star'];
  dataSource :MatTableDataSource<IProfil>


      constructor(private profilService: ProfilService,
        private router: Router) {}

      ngOnInit() {
       this.dataSource = new MatTableDataSource<IProfil>(this.profils)
        this.reloadData();
      }

      reloadData() {
      let resp = this.profilService.getProfilsList();
      resp.subscribe(report =>this.dataSource.data = report as IProfil[])

      }

       applyFilter(event: Event) {
              const filterValue = (event.target as HTMLInputElement).value;
              this.dataSource.filter = filterValue.trim().toLowerCase();
            }

      deleteProfil(id: number) {
        this.profilService.deleteProfil(id)
          .subscribe(
            data => {
              console.log(data);
              this.reloadData();
            },
            error => console.log(error));
      }

      profilDetails(id: number){
        this.router.navigate(['profile', id]);
      }

      updateProfil(id: number){
          this.router.navigate(['updateprofile', id]);
        }

       addProfil(){
        this.router.navigate(['addprofile']);
                  }


}
