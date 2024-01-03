import { Component } from '@angular/core';
import { QuizReq } from 'src/app/Core/Models/QuizReq.model';
import { QuizService } from 'src/app/Core/Services/quiz.service';

@Component({
  selector: 'app-add-quiz-form',
  templateUrl: './add-quiz-form.component.html',
  styleUrls: ['./add-quiz-form.component.css']
})
export class AddQuizFormComponent {
  constructor(private quizQervice:QuizService){}
  quiz:QuizReq={
    id: 0,
    passScore: 0,
    chances: 0,
    comment: '',
    duration: '01:02:02',
    teacher_id: 9
  }
  steps:number = 0;
  receiveDataFromQuizInfo(data:any)
  {
    this.quiz.passScore = data.passScore
    this.quiz.passScore = data.passScore
    this.quiz.chances = data.chances
    this.quiz.comment = data.comment
    // this.quiz.duration = data.duration
    this.quiz.teacher_id = 9
    this.postData()
  }

  postData()
  {
    this.quizQervice.postData(this.quiz).subscribe(
      (res)=> {
        this.quiz.id = res.id;
        this.steps+=1
      }
    )
  }
}
