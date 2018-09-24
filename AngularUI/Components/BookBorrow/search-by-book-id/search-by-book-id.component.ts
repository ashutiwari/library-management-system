import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookBorrowService } from '../../../Services/book-borrow.service';


@Component({
  selector: 'app-search-by-book-id',
  templateUrl: './search-by-book-id.component.html',
  styleUrls: ['./search-by-book-id.component.css']
})
export class SearchByBookIdComponent implements OnInit {

  constructor(private router: Router, private BookBorrow: BookBorrowService) { }


  details: any;
  bookId: string;
  response: string;

  ngOnInit() {
  }


  searchBybookId() {
    const body = {
      bookId: this.bookId
    };

    this.BookBorrow.SearchByBookId(body).subscribe(res => {
      console.log(res);
      if (res.success) {
        this.details = res.msg;
        this.response = 'See the result';
      } else {
        this.response = 'Some thing Wrong!!!! ';
      }
    });
  }
}
