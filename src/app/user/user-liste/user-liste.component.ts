//import { UserDetailsComponent } from 'src/app/user/user-details/user-details.component';
import { Observable } from "rxjs";
import { UserService } from "src/app/service/user.service";
import { User } from "src/app/model/user";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import {MatTableDataSource} from '@angular/material/table';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

export interface IUser {
     id: number;
     email: string;
     password: string;
     username: string;
    // roles:string[];

}
const ELEMENT_DATA: IUser[] = [
];


@Component({
  selector: 'app-user-liste',
  templateUrl: './user-liste.component.html',
  styleUrls: ['./user-liste.component.css']
})
export class UserListeComponent implements OnInit {
  currentUser:any;
 users: IUser[];
  displayedColumns:string[] = ['id', 'email','password','username','star'];
  dataSource :MatTableDataSource<IUser>



  constructor(private userService: UserService,private token: TokenStorageService,
    private router: Router) {}




  ngOnInit() {
      this.dataSource = new MatTableDataSource<IUser>(this.users)
        this.reloadData();

      this.currentUser = this.token.getUser();
  }


  reloadData() {
   let resp = this.userService.getUsersList();
       resp.subscribe(report =>this.dataSource.data = report as IUser[])

  }
    applyFilter(event: Event) {
          const filterValue = (event.target as HTMLInputElement).value;
          this.dataSource.filter = filterValue.trim().toLowerCase();
        }

  deleteUser(id: number) {
    this.userService.deleteUser(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  userDetails(id: number){
    this.router.navigate(['user', id]);
  }

  updateUser(id: number){
      this.router.navigate(['updateuser', id]);
    }

  addUser(){
      this.router.navigate(['addUser']);
        }

}
