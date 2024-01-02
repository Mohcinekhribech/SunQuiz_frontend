import { Component } from '@angular/core';
import { Teacher } from 'src/app/Core/Models/Teacher.model';
import { TeacherService } from 'src/app/Core/Services/teacher.service';
import swal from 'sweetalert'

@Component({
  selector: 'app-add-teacher-form',
  templateUrl: './add-teacher-form.component.html',
  styleUrls: ['./add-teacher-form.component.css']
})
export class AddTeacherFormComponent {
  constructor(private teacherService: TeacherService) {}
  ngOnInit(){}
  teacher:Teacher = {
    id: 0,
    firstName: '',
    lastName: '',
    dateOfBirth: null,
    adress: '',
    speciality: ''
  }
  postData()
  {
    this.teacherService.postData(this.teacher).subscribe(
      ()=>swal("Teacher Created!", "You clicked the button!", "success")
    )
  }
}
