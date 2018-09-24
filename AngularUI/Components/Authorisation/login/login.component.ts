import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  username: string;
  password: string;
  response: string;

  constructor(private router: Router, private Auth: AuthService) { }

  ngOnInit() {
  }

  login(rp) {
    const body = {
      username: this.username,
      password: this.password
    };

    this.Auth.LogIn(body).subscribe(res => {
      console.log(res);
      if (res.success) {
        this.router.navigate(['/' + rp]);
      } else {
        this.response = res.msg;
      }
    });
  }


}
