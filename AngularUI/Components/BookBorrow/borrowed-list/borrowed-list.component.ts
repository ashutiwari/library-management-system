import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookBorrowService } from '../../../Services/book-borrow.service';
@Component({
  selector: 'app-borrowed-list',
  templateUrl: './borrowed-list.component.html',
  styleUrls: ['./borrowed-list.component.css']
})
export class BorrowedListComponent implements OnInit {


  details: any;
  response: string;
  constructor(private router: Router, private BookBorrow: BookBorrowService) { }

  ngOnInit() {
  }

  get() {

    this.BookBorrow.Get().subscribe(res => {

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
