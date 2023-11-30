import { Component, Input } from '@angular/core';
import { Subject } from 'src/app/Core/Models/Subject.model';
import { SubjectReq } from 'src/app/Core/Models/SubjectReq';
import { SubjectService } from 'src/app/Core/Services/subject.service';
import swal from 'sweetalert'

@Component({
  selector: 'app-add-subject-form',
  templateUrl: './add-subject-form.component.html',
  styleUrls: ['./add-subject-form.component.css']
})
export class AddSubjectFormComponent {
  constructor(private subjectService:SubjectService){}
  ngOnInit(){}
  @Input() subjects:Subject[]=[];
  subject:SubjectReq = {
    id:0,
    title:'',
    parentSubject_id:0
  }
  postData()
  {
    this.subjectService.postData(this.subject).subscribe(
      ()=>swal("Subject Created!", "You clicked the button!", "success")
    )
  }
}