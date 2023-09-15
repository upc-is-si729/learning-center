import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {StudentsService} from "../../services/students.service";
import {Student} from "../../model/student";
import {MatTableDataSource} from "@angular/material/table";
import {NgForm} from "@angular/forms";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";

@Component({
  selector: 'app-students', templateUrl: './students.component.html', styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit, AfterViewInit {

  // Attributes

  studentData: Student;
  dataSource: MatTableDataSource<any>;
  displayedColumns: string[] = ['id', 'name', 'age', 'address', 'action'];

  @ViewChild('studentForm', {static: false}) studentForm!: NgForm;

  @ViewChild(MatPaginator, {static: false}) paginator!: MatPaginator;

  @ViewChild(MatSort, {static: false}) sort!: MatSort;

  isEditMode = false;

  // Constructor
  constructor(private studentsService: StudentsService) {
    this.studentData = {} as Student;
    this.dataSource = new MatTableDataSource<any>();
  }

  // Methods

  resetEditState() {
    this.isEditMode = false;
    this.studentForm.resetForm();
    this.studentData = {} as Student;
  }

  // CRUD actions
  getAllStudents() {
    this.studentsService.getAll().subscribe((response: any) => {
      this.dataSource.data = response;
    });
  }

  addStudent() {
    this.studentData.id = 0;
    this.studentsService.create(this.studentData).subscribe(() => {
      this.dataSource.data.push({...this.studentData});
      this.dataSource.data = this.dataSource.data.map((o: Student) => {
        return o;
      });
    });
  }

  updateStudent() {
    this.studentsService.update(this.studentData.id, this.studentData).subscribe(() => {
      this.dataSource.data = this.dataSource.data.map((o: Student) => {
        if (o.id === this.studentData.id) {
          o = this.studentData;
        }
        return o;
      });
    });
  }

  deleteStudent(id: number) {
    this.studentsService.delete(id).subscribe(() => {
      this.dataSource.data = this.dataSource.data.filter((o: Student) => {
        return o.id !== id ? o : false
      });
    });
  }

  // Component User Interface Event Handling methods
  onEditItem(element: Student) {
    this.studentData = element;
    this.isEditMode = true;
  }

  onCancelEdit() {
    this.resetEditState();
  }

  onDeleteItem(element: Student) {
    this.deleteStudent(element.id);
  }

  onSubmit() {
    if (this.studentForm.form.valid) {
      if (this.isEditMode) {
        this.updateStudent();
      } else {
        this.addStudent();
      }
      this.resetEditState();
    } else {
      console.log('Invalid Data');
    }
  }

  // Component lifecycle event handlers
  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.getAllStudents();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }

}
