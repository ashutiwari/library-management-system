import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookBorrowService } from '../../../Services/book-borrow.service';
@Component({
  selector: 'app-return',
  templateUrl: './return.component.html',
  styleUrls: ['./return.component.css']
})
export class ReturnComponent implements OnInit {

  bookId: string;
  studentId: string;
  response: string;
  constructor(private router: Router, private BookBorrow: BookBorrowService) { }

  ngOnInit() {
  }



  return() {
    const body = {
      bookId: this.bookId,
      studentId: this.studentId
    };

    this.BookBorrow.Return(body).subscribe(res => {
      console.log(res);
      if (res.success) {
        this.response = res.msg;
      } else {
        this.response = res.msg;
      }
    });
  }
}

