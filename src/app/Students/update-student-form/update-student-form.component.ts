import { Component, Input } from '@angular/core';
import { Student } from 'src/app/Core/Models/Student.model';
import { StudentService } from 'src/app/Core/Services/student.service';
import swal from 'sweetalert'

@Component({
  selector: 'app-update-student-form',
  templateUrl: './update-student-form.component.html',
  styleUrls: ['./update-student-form.component.css']
})
export class UpdateStudentFormComponent {
  constructor(private studentService: StudentService) {}
  
  student:Student = {
    id: 0,
    firstName: '',
    lastName: '',
    adress: '',
    dateOfBirth: null,
    registrationDate: null
  }

  @Input() id: number=0;

  ngOnInit(){
    this.studentService.getOneStudent(this.id).subscribe(
      res=>{
        this.student.id = res.id
        this.student.adress = res.adress
        this.student.dateOfBirth = res.dateOfBirth
        this.student.firstName = res.firstName
        this.student.lastName = res.lastName
        this.student.registrationDate = res.registrationDate
      }
    )
  }

  putData()
  {
    this.studentService.putData(this.student,this.id).subscribe(
      ()=>swal("Student Updated!", "You clicked the button!", "success")
    )
  }
}
