import {Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { Router } from '@angular/router';
import {UserService} from "src/app/service/user.service";
import { AuthService } from 'src/app/_services/auth.service';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {
  isValidFormSubmitted = false;
     userForm = new FormGroup({
     username: new FormControl('', [Validators.required,Validators.minLength(2)]),
     email: new FormControl('', [Validators.required,Validators.email]),
     password: new FormControl('', [Validators.required,Validators.minLength(6)])
     });
        submitted = false;


  form: any = {};
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService, private router:Router,private _snackBar: MatSnackBar) { }

  ngOnInit() {
  }


  onSubmit() {



           this.isValidFormSubmitted = false;
                        if (this.form.username.trim().length<2) {
                           return ;
                           }
                            if (this.form.password.trim().length<6) {
                                                    return;
                                                    }

          this.isValidFormSubmitted = true;
          this.submitted = true;
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
onReset() {
        this.submitted = false;
        this.userForm.reset();
    }

//c
  gotoList() {
    this.router.navigate(['/userliste']);
  }

  openSnackBar() {
    this._snackBar.open("User Added !!!", "Ok"
     
    );
  }
}
