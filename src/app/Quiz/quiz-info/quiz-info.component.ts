import { Component, EventEmitter, Output } from '@angular/core';
import { QuizReq } from 'src/app/Core/Models/QuizReq.model';

@Component({
  selector: 'app-quiz-info',
  templateUrl: './quiz-info.component.html',
  styleUrls: ['./quiz-info.component.css']
})
export class QuizInfoComponent {
  @Output() childEvent = new EventEmitter<Object | null>();

  quizInfo:QuizReq = {
    teacher_id: 2,
    id: 0,
    passScore: 0,
    chances: 0,
    comment: '',
    duration: ""
  }
  sendDataToParent()
  {
    (this.quizInfo.comment !== '' && this.quizInfo.chances > 0 && this.quizInfo.passScore > 0 && this.quizInfo.teacher_id > 0)?
      this.childEvent.emit(this.quizInfo) : this.childEvent.emit(null) ;
  }
}
