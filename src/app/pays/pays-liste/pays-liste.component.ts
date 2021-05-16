import { Component, OnInit,ViewChild } from '@angular/core';
//import { PaysDetailsComponent } from 'src/app/pays/pays-details/pays-details.component';
import { Observable } from "rxjs";
import { PaysService } from "src/app/service/pays.service";
import { Pays} from "src/app/model/pays";
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { element } from 'protractor';
import { MatSort } from '@angular/material/sort';


import {MatTableDataSource} from '@angular/material/table';

export interface IPays {
  id: number;
  libelle: string;
  photo:any

}

@Component({
  selector: 'app-pays-liste',
  templateUrl: './pays-liste.component.html',
  styleUrls: ['./pays-liste.component.css']
})
export class PaysListeComponent implements OnInit {
  payss: IPays[];
  displayedColumns:string[] = ['id', 'libelle','photo','star'];
  dataSource :MatTableDataSource<IPays>


  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  @ViewChild(MatSort) sort: MatSort;


        constructor(private paysService: PaysService,
          private router: Router) {}

        ngOnInit() {
          this.dataSource = new MatTableDataSource<IPays>(this.payss)
          this.reloadData();
        }

        reloadData() {
        let resp = this.paysService.getPayssList();
             resp.subscribe(report =>this.dataSource.data = report as IPays[])
        }

 applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
      }



    deletePays(id: number) {
      this.paysService.deletePays(id)
        .subscribe(
          data => {
            console.log(data);
            this.reloadData();
          },
          error => console.log(error));
    }

        paysDetails(id: number){
          this.router.navigate(['pays', id]);
        }

        updatePays(id: number){
            this.router.navigate(['updatepays', id]);
          }

        addPays(){
            this.router.navigate(['addpays']);
              }


}
