import { Component, OnInit } from '@angular/core';
import { BookService } from '../../../Services/book.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-get-all-books',
  templateUrl: './get-all-books.component.html',
  styleUrls: ['./get-all-books.component.css']
})
export class GetAllBooksComponent implements OnInit {

  details: any;
  response: string;
  constructor(private router: Router, private Book: BookService) { }

  ngOnInit() {
  }

  get() {
    this.Book.Get().subscribe(res => {

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
