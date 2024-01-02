import { Component, Input } from '@angular/core';
import { Teacher } from 'src/app/Core/Models/Teacher.model';
import { TeacherService } from 'src/app/Core/Services/teacher.service';
import swal from 'sweetalert'

@Component({
  selector: 'app-update-teacher-form',
  templateUrl: './update-teacher-form.component.html',
  styleUrls: ['./update-teacher-form.component.css']
})
export class UpdateTeacherFormComponent {
  constructor(private teacherService: TeacherService) {}
  
  teacher:Teacher = {
    id: 0,
    firstName: '',
    lastName: '',
    adress: '',
    speciality: '',
    dateOfBirth: null
  }

  @Input() id: number=0;

  ngOnInit(){
    this.teacherService.getOneTeacher(this.id).subscribe(
      res=>{
        this.teacher.id = res.id
        this.teacher.adress = res.adress
        this.teacher.dateOfBirth = res.dateOfBirth
        this.teacher.firstName = res.firstName
        this.teacher.lastName = res.lastName
        this.teacher.speciality = res.speciality
      }
    )
  }

  putData()
  {
    this.teacherService.putData(this.teacher,this.id).subscribe(
      ()=>swal("Teacher Updated!", "You clicked the button!", "success")
    )
  }
}
