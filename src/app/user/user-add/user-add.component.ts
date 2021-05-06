import {Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms'
import { User } from 'src/app/model/user';
import { Router } from '@angular/router';
import {UserService} from "src/app/service/user.service";
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {

  form: any = {};
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService, private router:Router) { }

  ngOnInit() {
  }


  onSubmit() {
    this.authService.register(this.form).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        this.gotoList();
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
}
//c
  gotoList() {
    this.router.navigate(['/userliste']);
  }


}
