import { Component } from '@angular/core';
import { Student } from 'src/app/Core/Models/Student.model';
import { StudentService } from 'src/app/Core/Services/student.service';
import swal from 'sweetalert'

@Component({
  selector: 'app-add-student-form',
  templateUrl: './add-student-form.component.html',
  styleUrls: ['./add-student-form.component.css']
})
export class AddStudentFormComponent {
  constructor(private studentService: StudentService) {}
  ngOnInit(){}
  student:Student = {
    id: 0,
    firstName: '',
    lastName: '',
    dateOfBirth: null,
    adress: '',
    registrationDate: null
  }
  postData()
  {
    this.studentService.postData(this.student).subscribe(
      ()=>swal("Student Created!", "You clicked the button!", "success")
    )
  }
}
