import { Component, EventEmitter, Output } from '@angular/core';
import { Subject } from 'src/app/Core/Models/Subject.model';
import { SubjectService } from 'src/app/Core/Services/subject.service';

@Component({
  selector: 'app-choose-subject-for-question',
  templateUrl: './choose-subject-for-question.component.html',
  styleUrls: ['./choose-subject-for-question.component.css']
})
export class ChooseSubjectForQuestionComponent {
  
  constructor(private subjectService:SubjectService){}

  @Output() childEvent = new EventEmitter<Object | null>();

  subject:Subject={
    id: 0,
    title: '',
    parentSubject: null,
    childSubjects: [],
    parentSubject_id: 0
  }

  subjects:Subject[]=[]

  ngOnInit(){
    this.getSubjects()
  }
  getSubjects()
  {
    this.subjectService.getSomeData(0).subscribe(
      res => this.subjects = res.content
    )
  }
  chooseSubject(subject:Subject)
  {
    this.subject = subject;
  }

  sendDataToParent()
  {
    (this.subject.id != 0)?
      this.childEvent.emit(this.subject) : this.childEvent.emit(null) ;
  }
}
