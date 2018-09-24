import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookBorrowService } from '../../../Services/book-borrow.service';

@Component({
  selector: 'app-search-by-student-id',
  templateUrl: './search-by-student-id.component.html',
  styleUrls: ['./search-by-student-id.component.css']
})
export class SearchByStudentIdComponent implements OnInit {

  constructor(private router: Router, private BookBorrow: BookBorrowService) { }


  details: any;
  studentId: string;
  response: string;

  ngOnInit() {
  }


  searchByStudentId() {
    const body = {
      studentId: this.studentId
    };

    this.BookBorrow.SearchByStudentId(body).subscribe(res => {
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
