import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { Question } from 'src/app/Core/Models/Question.model';
import { Quiz } from 'src/app/Core/Models/Quiz.model';
import { Validation } from 'src/app/Core/Models/Validation.model';
import { QuizService } from 'src/app/Core/Services/quiz.service';
import { StudentAnswerService } from 'src/app/Core/Services/student-answer.service';

@Component({
  selector: 'app-passing-quiz',
  templateUrl: './passing-quiz.component.html',
  styleUrls: ['./passing-quiz.component.css']
})
export class PassingQuizComponent{
  id:number=0
  restOftime:number=0;
  index:number=0
  points:number=0;
  validation_ids:number[]=[]
  quiz:Quiz={
    id: 0,
    passScore: 0,
    chances: 0,
    comment: '',
    duration: '01:01:01',
    teacher: null,
    quizzQuestions: []
  }
  question:Question|null={
    id: 0,
    text: '',
    type: '',
    subject: null,
    level: null,
    media: null,
    validations:[]
  }
  intervalID:any
  constructor(private quizService:QuizService,private route:ActivatedRoute,private studentAnswer:StudentAnswerService){}
  ngOnInit() {
    this.getQuiz()
  }
  getQuiz()
  {
    this.route.paramMap.pipe(
      switchMap(params => {
        this.id = Number(params.get('id'));
        return this.quizService.getOneQuiz(this.id);
      })
      ).subscribe(
        res => {
          this.quiz = res;
          this.startTimer(this.quiz.quizzQuestions[this.index].duration)
          this.question = this.quiz.quizzQuestions[this.index].question
          this.calPoitsInOneQuestion(this.question?.validations)
        },
        error => {
          console.error('Erreur lors de la récupération du quiz:', error);
        }
      );
  }
  calPoitsInOneQuestion(validation:Validation[]|undefined)
  {
    validation?.map(val => this.points += val.points)
  }
  startTimer(time:number) {
    this.restOftime=time
      this.intervalID=setInterval(() => {
        if(this.restOftime > 0) {
          this.restOftime--;
        }
        // else if(this.restOftime<=10){
        //   document.getElementById("timer")?.classList.add("bg-red-400")
        // }
        else if(this.restOftime == 0) {
          if(this.quiz.quizzQuestions.length -1 > this.index)
             this.next();
            else if(this.quiz.quizzQuestions.length -1 != this.index){
              this.Done()
            }
        }
      },1000)
  }
  next()
  {
    clearInterval(this.intervalID)
    this.index += 1;
    this.question = this.quiz.quizzQuestions[this.index].question
    this.startTimer(this.quiz.quizzQuestions[this.index].duration)
  }
  selectAnswer(id:number)
  {
    this.validation_ids.push(id);
  }
  removeSelectedAnswer(id:number)
  {
    this.validation_ids.splice(this.validation_ids.indexOf(id))
  }
  Done()
  {
    this.validation_ids.forEach(id => {
      this.studentAnswer.postData(1,id).subscribe(()=>console.log(1))
    });
  }
}