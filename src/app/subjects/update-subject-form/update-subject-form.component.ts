import { Component, Input } from '@angular/core';
import { Subject } from 'src/app/Core/Models/Subject.model';
import { SubjectReq } from 'src/app/Core/Models/SubjectReq';
import { SubjectService } from 'src/app/Core/Services/subject.service';
import swal  from 'sweetalert'

@Component({
  selector: 'app-update-subject-form',
  templateUrl: './update-subject-form.component.html',
  styleUrls: ['./update-subject-form.component.css']
})
export class UpdateSubjectFormComponent {
  constructor(private subjectService:SubjectService){}
  @Input() subjects:Subject[]=[];
  @Input() id:number=0;
  subject:SubjectReq = {
    id:0,
    title:'',
    parentSubject_id:0
  }
  subjectResp:Subject = {
    id: 0,
    title: '',
    parentSubject: {
      id: 0,
      title: '',
      parentSubject_id: 0
    },
    childSubjects: [],
    parentSubject_id: 0
  }
  ngOnInit(){
    this.subjectService.getOneSubject(this.id).subscribe(
      res=>{
        console.log(res)
        this.subjectResp.id= res.id
        this.subjectResp.title= res.title
        this.subjectResp.parentSubject= res.parentSubject
      }
    )
  }
  putData()
  {
    this.subjectService.putData(this.subject,this.id).subscribe(
      ()=>swal("Subject Updated!", "You clicked the button!", "success")
    )
  }
}

