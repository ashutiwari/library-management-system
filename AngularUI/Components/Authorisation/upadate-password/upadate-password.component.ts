import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../Services/auth.service';
@Component({
  selector: 'app-upadate-password',
  templateUrl: './upadate-password.component.html',
  styleUrls: ['./upadate-password.component.css']
})
export class UpadatePasswordComponent implements OnInit {

  username: string;
  password: string;
  newpassword: string;
  response: string;
  constructor(private router: Router, private Auth: AuthService) { }

  ngOnInit() {
  }

  update() {
    const body = {
      username: this.username,
      password: this.password,
      newPassword: this.newpassword
    };

    this.Auth.Update(body).subscribe(res => {
      console.log(res);
      if (res.success) {
        this.response = res.msg;
      } else {
        this.response = res.msg;
      }
    });
  }

}
