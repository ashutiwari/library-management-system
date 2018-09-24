import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookBorrowService } from '../../../Services/book-borrow.service';
@Component({
  selector: 'app-borrow',
  templateUrl: './borrow.component.html',
  styleUrls: ['./borrow.component.css']
})
export class BorrowComponent implements OnInit {

  bookId: string;
  studentId: string;
  response: string;
  constructor(private router: Router, private BookBorrow: BookBorrowService) { }

  ngOnInit() {
  }



  borrow() {
    const body = {
      bookId: this.bookId,
      studentId: this.studentId
    };

    this.BookBorrow.Borrow(body).subscribe(res => {
      console.log(res);
      if (res.success) {
        this.response = res.msg;
      } else {
        this.response = res.msg;
      }
    });
  }
}





