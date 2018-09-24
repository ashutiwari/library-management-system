import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../Services/auth.service';
@Component({
  selector: 'app-all-authorisation-list',
  templateUrl: './all-authorisation-list.component.html',
  styleUrls: ['./all-authorisation-list.component.css']
})
export class AllAuthorisationListComponent implements OnInit {

  details: any;
  response: string;
  constructor(private router: Router, private Auth: AuthService) { }

  ngOnInit() {
  }

  get() {
    this.Auth.Get().subscribe(res => {

      console.log(res);

      if (res.success && res.msg != null) {
        this.response = 'see your search result';
        this.details = res.msg;

      } else {
        this.response = 'Operation failed!';
      }
    });


  }


}
