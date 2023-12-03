import { Component } from '@angular/core';
import { Question } from 'src/app/Core/Models/Question.model';
import { QuestionReq } from 'src/app/Core/Models/QuestionReq.model';
import { Subject } from 'src/app/Core/Models/Subject.model';
import { QuestionService } from 'src/app/Core/Services/question.service';

@Component({
  selector: 'app-add-question-form',
  templateUrl: './add-question-form.component.html',
  styleUrls: ['./add-question-form.component.css']
})
export class AddQuestionFormComponent {
  constructor(private questionService:QuestionService){}
  question:QuestionReq={
    id: 0,
    text: '',
    type: '',
    subject_id: 0,
    level_id: 0,
    media_id: 0
  }
  steps:number = 0;
  receiveDataFromQuestionInfo(data:any)
  {
    this.question.text = data.text
    this.question.type = data.type
    this.question.level_id = data.level_id
    this.steps+=1
  }
  receiveDataFromSubject(data:any)
  {
    this.question.subject_id = data.id
    this.steps+=1
  }
  receiveDataFromMedia(data:any)
  {
    this.question.media_id = data.id
    this.postData()
  }

  postData()
  {
    this.questionService.postData(this.question).subscribe(
      (res)=> {
        this.question.id = res.id;
        this.steps+=1
      }
    )
  }
}