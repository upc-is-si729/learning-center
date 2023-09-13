import { Component } from '@angular/core';
import {StudentsService} from "../../services/students.service";

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent {
  constructor(private studentsService: StudentsService) {
    this.studentsService.getAll().subscribe((response: any) => {
      console.log(response);
    })
  }

}
