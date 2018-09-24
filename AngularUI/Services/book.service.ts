import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class BookService {
  address = 'http://127.0.0.1:3000';
  constructor(private http: Http) { }



  Add(body) {
    const header = new Headers();
    header.append('Content-Type', 'application/json');

    return this.http

      .post(this.address + '/book/addBook' , body , {headers: header})
      .pipe(map(res => res.json()));

  }

  Remove(body) {
    const header = new Headers();
    header.append('Content-Type', 'application/json');

    return this.http

      .post(this.address + '/book/remove' , body , {headers: header})
      .pipe(map(res => res.json()));

  }

  Get() {
    const header = new Headers();
    header.append('Content-Type', 'application/json');

    return this.http

      .get(this.address + '/book/getAllBook' , {headers: header})
      .pipe(map(res => res.json()));

  }
}
