import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StuService } from '../../../Services/stu.service';
@Component({
  selector: 'app-resister-student',
  templateUrl: './resister-student.component.html',
  styleUrls: ['./resister-student.component.css']
})
export class ResisterStudentComponent implements OnInit {

  name: string;
  studentId: string;
  class: string;
  response: string;
  constructor(private router: Router, private Student: StuService) { }

  ngOnInit() {
  }



  register() {
    const body = {
      name: this.name,
      studentId: this.studentId,
      class: this.class
    };

    this.Student.Register(body).subscribe(res => {
      console.log(res);
      if (res.success) {
        this.response = res.msg;
      } else {
        this.response = res.msg;
      }
    });
  }
}
