import {Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {Student} from "../../model/student";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent {

  // Attributes

  @Input()student: Student;

  @ViewChild('studentForm', {static: false}) studentForm!: NgForm;

  @Input() editMode = false;

  @Output()studentAdded = new EventEmitter<Student>();

  @Output()studentUpdated = new EventEmitter<Student>();

  @Output()editCanceled = new EventEmitter();

  // Constructor
  constructor() {
    this.student = {} as Student;
  }

  // Private Methods

  private resetEditState() {
    this.editMode = false;
    this.studentForm.resetForm();
    this.student = {} as Student;
  }

  // Component User Interface Event Handling methods

  onSubmit() {
    if (this.studentForm.form.valid) {
      if (this.editMode) {
        this.studentUpdated.emit(this.student);
      } else {
        this.studentAdded.emit(this.student);
      }
      this.resetEditState();
    } else {
      console.log('Invalid Data');
    }
  }

  onCancel() {
    this.resetEditState();
    this.editCanceled.emit();
  }
}
