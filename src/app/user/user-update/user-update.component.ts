import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {

    id: number;
    user: User;

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
      this.updateUser();
    }

    gotoList() {
      this.router.navigate(['/userliste']);
    }

}
