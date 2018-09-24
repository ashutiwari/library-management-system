import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  address = 'http://127.0.0.1:3000';

  constructor(private http: Http) { }


  Register(body) {
    const header = new Headers();
    header.append('Content-Type', 'application/json');

    return this.http

      .post(this.address + '/auth/resisterAuthorization' , body , {headers: header})
      .pipe(map(res => res.json()));

  }

  LogIn(body) {
    const header = new Headers();
    header.append('Content-Type', 'application/json');

    return this.http

      .post(this.address + '/auth/login' , body , {headers: header})
      .pipe(map(res => res.json()));

  }

  Get() {
    const header = new Headers();
    header.append('Content-Type', 'application/json');

    return this.http

      .get(this.address + '/auth/getAllAuthorization' , {headers: header})
      .pipe(map(res => res.json()));

  }

  Remove(body) {
    const header = new Headers();
    header.append('Content-Type', 'application/json');

    return this.http

      .post(this.address + '/auth/remove' , body , {headers: header})
      .pipe(map(res => res.json()));

  }

  Update(body) {
    const header = new Headers();
    header.append('Content-Type', 'application/json');

    return this.http

      .post(this.address + '/auth/updatePassword' , body, {headers: header})
      .pipe(map(res => res.json()));

  }
}
