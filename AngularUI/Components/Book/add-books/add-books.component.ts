import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../../../Services/book.service';
@Component({
  selector: 'app-add-books',
  templateUrl: './add-books.component.html',
  styleUrls: ['./add-books.component.css']
})
export class AddBooksComponent implements OnInit {

  name: string;
  bookId: string;
  subject: string;
  response: string;
  constructor(private router: Router, private Book: BookService) { }

  ngOnInit() {
  }



  add() {
    const body = {
      name: this.name,
      bookId: this.bookId,
      subject: this.subject
    };

    this.Book.Add(body).subscribe(res => {
      console.log(res);
      if (res.success) {
        this.response = res.msg;
      } else {
        this.response = res.msg;
      }
    });
  }
}
