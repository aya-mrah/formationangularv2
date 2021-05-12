import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {


     isValidFormSubmitted = false;
     userForm = new FormGroup({
     username: new FormControl('', [Validators.required,Validators.minLength(2)]),
     email: new FormControl('', [Validators.required,Validators.email]),
     password: new FormControl('', [Validators.required,Validators.minLength(6)])     });

    id: number;
    user: User;
     submitted = false;
    constructor(private route: ActivatedRoute,private router: Router,
      private userService: UserService) { }

    ngOnInit() {
      this.user = new User();

      this.id = this.route.snapshot.params['id'];

      this.userService.getUser(this.id)
        .subscribe(data => {
          console.log(data)
          this.user = data;
        }, error => console.log(error));
    }

    updateUser() {
      this.userService.updateUser(this.id, this.user)
        .subscribe(data => {
          console.log(data);
          this.user = new User();
          this.gotoList();
        }, error => console.log(error));
    }

    onSubmit() {
         this.isValidFormSubmitted = false;
                            if (this.user.username.trim().length<2) {
                               return ;
                               }
                               if (this.user.password.trim().length<6) {
                                 return ;
                                                              }

              this.isValidFormSubmitted = true;

      this.updateUser();
    }

    gotoList() {
      this.router.navigate(['/userliste']);
    }
    onReset() {
                     this.submitted = false;
                     this.userForm.reset();
                 }

}
