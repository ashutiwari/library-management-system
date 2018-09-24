import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookBorrowService {

  address = 'http://127.0.0.1:3000';
  constructor(private http: Http) { }



  Borrow(body) {
    const header = new Headers();
    header.append('Content-Type', 'application/json');

    return this.http

      .post(this.address + '/bookBorrow/borrow' , body , {headers: header})
      .pipe(map(res => res.json()));

  }

  Return(body) {
    const header = new Headers();
    header.append('Content-Type', 'application/json');

    return this.http

      .post(this.address + '/bookBorrow/return' , body , {headers: header})
      .pipe(map(res => res.json()));

  }

  SearchByStudentId(body) {
    const header = new Headers();
    header.append('Content-Type', 'application/json');

    return this.http

      .post(this.address + '/bookBorrow/searchByStudentId' , body , {headers: header})
      .pipe(map(res => res.json()));

  }

  SearchByBookId(body) {
    const header = new Headers();
    header.append('Content-Type', 'application/json');

    return this.http

      .post(this.address + '/bookBorrow/searchByBookId' , body , {headers: header})
      .pipe(map(res => res.json()));

  }

  Get() {
    const header = new Headers();
    header.append('Content-Type', 'application/json');

    return this.http

      .get(this.address + '/bookBorrow/borrowList' , {headers: header})
      .pipe(map(res => res.json()));

  }
}
