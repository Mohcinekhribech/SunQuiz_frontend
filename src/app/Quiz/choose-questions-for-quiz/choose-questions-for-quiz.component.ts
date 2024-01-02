import { Component, Input } from '@angular/core';
import { Question } from 'src/app/Core/Models/Question.model';
import { Quiz } from 'src/app/Core/Models/Quiz.model';
import { QuizzQuestion } from 'src/app/Core/Models/QuizzQuestion.model';
import { QuizzQuestionReq } from 'src/app/Core/Models/QuizzQuestionReq.model';
import { QuestionService } from 'src/app/Core/Services/question.service';
import { QuizzQuestionService } from 'src/app/Core/Services/quizz-question.service';

@Component({
  selector: 'app-choose-questions-for-quiz',
  templateUrl: './choose-questions-for-quiz.component.html',
  styleUrls: ['./choose-questions-for-quiz.component.css']
})
export class ChooseQuestionsForQuizComponent {

  @Input() quiz_id:number=0
  constructor(private questionService:QuestionService, private quizzQuestionService:QuizzQuestionService){}
  quiz:Quiz={
    id: 0,
    passScore: 0,
    chances: 0,
    comment: '',
    duration: "01:01:02",
    teacher: null,
    quizzQuestions: []
  }

  quizzQuestion:QuizzQuestion={
    id: 0,
    duration: 0,
    quizz: null,
    question: null
  }

  quizzQuestionReq:QuizzQuestionReq={
    id: 0,
    duration: 0,
    quizz_id: 0,
    question_id: 0
  }

  isShowAddForm : boolean = false;

  ngOnInit()
  {
    this.getQuestions()
    this.quizzQuestionReq.quizz_id = this.quiz_id
  }

  questions:Question[]=[]

  getQuestions()
  {
    this.questionService.getSomeData(0).subscribe(
      res => this.questions = res.content
    )
  }

  chooseAnswer(question:Question)
  {
    this.quizzQuestionReq.question_id = question.id;
    this.isShowAddForm = true;
  }

  postData()
  {
    console.log(this.quizzQuestionReq)
    this.quizzQuestionService.postData(this.quizzQuestionReq).subscribe(
      res=> {
        console.log(res)
        this.quiz.quizzQuestions.push(res)
        this.closeAddForm()
      }
    )
  }

  closeAddForm()
  {
    this.isShowAddForm = false
  }
}
