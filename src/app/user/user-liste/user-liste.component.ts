//import { UserDetailsComponent } from 'src/app/user/user-details/user-details.component';
import { Observable } from "rxjs";
import { UserService } from "src/app/service/user.service";
import { User } from "src/app/model/user";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

import { TokenStorageService } from 'src/app/_services/token-storage.service';

@Component({
  selector: 'app-user-liste',
  templateUrl: './user-liste.component.html',
  styleUrls: ['./user-liste.component.css']
})
export class UserListeComponent implements OnInit {
  currentUser:any;
  users: Observable<User[]>;

  constructor(private userService: UserService,private token: TokenStorageService,
    private router: Router) {}

  ngOnInit() {

    this.reloadData();
    this.currentUser = this.token.getUser();
  }

  reloadData() {
    this.users = this.userService.getUsersList();
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
