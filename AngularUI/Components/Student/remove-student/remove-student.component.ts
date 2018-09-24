import { Component, OnInit } from '@angular/core';
import { StuService } from '../../../Services/stu.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-remove-student',
  templateUrl: './remove-student.component.html',
  styleUrls: ['./remove-student.component.css']
})
export class RemoveStudentComponent implements OnInit {

  studentId: string;
  response: string;
  constructor(private router: Router, private Student: StuService) { }

  ngOnInit() {
  }




  remove() {
    const body = {
      studentId: this.studentId
    };

    this.Student.Remove(body).subscribe(res => {
      console.log(res);
      if (res.success) {
        this.response = res.msg;
      } else {
        this.response = res.msg;
      }
    });
  }
}
