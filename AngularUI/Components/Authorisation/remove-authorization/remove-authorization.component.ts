import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../Services/auth.service';

@Component({
  selector: 'app-remove-authorization',
  templateUrl: './remove-authorization.component.html',
  styleUrls: ['./remove-authorization.component.css']
})
export class RemoveAuthorizationComponent implements OnInit {


  username: string;
  password: string;
  response: string;

  constructor(private router: Router, private Auth: AuthService) { }

  ngOnInit() {
  }



  remove(rp) {
    const body = {
      username: this.username,
      password: this.password
    };

    this.Auth.Remove(body).subscribe(res => {
      console.log(res);
      if (res.success) {
        this.response = res.msg;
      } else {
        this.response = res.msg;
      }
    });
  }
}
