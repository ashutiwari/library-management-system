import { Component, OnInit } from '@angular/core';
import { StuService } from '../../../Services/stu.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-all-student',
  templateUrl: './get-all-student.component.html',
  styleUrls: ['./get-all-student.component.css']
})
export class GetAllStudentComponent implements OnInit {

  details: any;
  response: string;
  constructor(private router: Router, private Student: StuService) { }

  ngOnInit() {
  }

  get() {

    this.Student.Get().subscribe(res => {

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
