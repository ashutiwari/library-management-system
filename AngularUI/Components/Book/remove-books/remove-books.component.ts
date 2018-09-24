import { Component, OnInit } from '@angular/core';
import { BookService } from '../../../Services/book.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-remove-books',
  templateUrl: './remove-books.component.html',
  styleUrls: ['./remove-books.component.css']
})
export class RemoveBooksComponent implements OnInit {
  bookId: string;
  response: string;
  constructor(private router: Router, private Book: BookService) { }

  ngOnInit() {
  }




  remove() {
    const body = {
      bookId: this.bookId
    };

    this.Book.Remove(body).subscribe(res => {
      console.log(res);
      if (res.success) {
        this.response = res.msg;
      } else {
        this.response = res.msg;
      }
    });
  }
}
