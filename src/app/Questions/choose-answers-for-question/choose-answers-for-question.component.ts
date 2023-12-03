import { Component, Input } from '@angular/core';
import { Answer } from 'src/app/Core/Models/Answer.model';
import { Question } from 'src/app/Core/Models/Question.model';
import { Validation } from 'src/app/Core/Models/Validation.model';
import { ValidationReq } from 'src/app/Core/Models/ValidationReq.model';
import { AnswerService } from 'src/app/Core/Services/answer.service';
import { ValidationService } from 'src/app/Core/Services/validation.service';

@Component({
  selector: 'app-choose-answers-for-question',
  templateUrl: './choose-answers-for-question.component.html',
  styleUrls: ['./choose-answers-for-question.component.css']
})
export class ChooseAnswersForQuestionComponent {
  constructor(private answerService:AnswerService , private validationService:ValidationService){}
  @Input() question_id:number =0;
  question:Question={
    id: 0,
    text: '',
    type: '',
    subject: null,
    level: null,
    media: null,
    validations: []
  }

  validation:Validation={
    id: 0,
    correct: false,
    points: 0,
    answer: null,
    question_id: this.question_id
  }

  validationReq:ValidationReq={
    id: 0,
    correct: false,
    points: 0,
    question_id: this.question_id,
    answer_id: 0
  }

  isShowAddForm : boolean = false;

  ngOnInit()
  {
    this.getAnswers()
  }

  answers:Answer[]=[]

  getAnswers()
  {
    this.answerService.getSomeData(0).subscribe(
      res => this.answers = res.content
    )
  }

  chooseAnswer(answer:Answer)
  {
    this.validationReq.answer_id = answer.id;
    this.isShowAddForm = true;
  }

  postData()
  {
    this.validationService.postData(this.validationReq).subscribe(
      res=> {
        this.question.validations.push(res)
        this.closeAddForm()
      }
    )
  }

  closeAddForm()
  {
    this.isShowAddForm = false
  }
}