import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../Services/auth.service';




@Component({
  selector: 'app-resistration',
  templateUrl: './resistration.component.html',
  styleUrls: ['./resistration.component.css']
})
export class ResistrationComponent implements OnInit {

  name: string;
  username: string;
  password: string;
  repassword: string;
  response: string;
  status: string;



  constructor(private router: Router, private Auth: AuthService) { }

  ngOnInit() {
  }

  goto(PATH) {
    this.router.navigate(['/' + PATH]);
  }

  chPass() {
    if (this.password === this.repassword) {
      this.status = 'Password  matched.!';
    } else {
      this.status = 'Password not matched.!';
    }
  }



  register(rp) {
    const body = {
      name: this.name,
      username: this.username,
      password: this.password
    };

    this.Auth.Register(body).subscribe(res => {
      console.log(res);
      if (res.success) {
        this.router.navigate(['/' + rp]);
      } else {
        this.response = res.msg;
      }
    });
  }



}
