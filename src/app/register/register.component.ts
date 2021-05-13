import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 isValidFormSubmitted = false;
     registerForm = new FormGroup({
     username: new FormControl('', [Validators.required,Validators.minLength(2)]),
     email: new FormControl('', [Validators.required,Validators.email]),
     password: new FormControl('', [Validators.required,Validators.minLength(6)])
     });
        submitted = false;


  form: any = {};
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService) { }

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

      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }
  onReset() {
          this.submitted = false;
          this.registerForm.reset();
      }
}

