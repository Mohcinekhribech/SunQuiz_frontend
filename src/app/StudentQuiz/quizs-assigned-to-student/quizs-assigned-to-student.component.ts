import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AssignQuiz } from 'src/app/Core/Models/AssignQuiz.model';
import { AssignQuizService } from 'src/app/Core/Services/assign-quiz.service';

@Component({
  selector: 'app-quizs-assigned-to-student',
  templateUrl: './quizs-assigned-to-student.component.html',
  styleUrls: ['./quizs-assigned-to-student.component.css']
})
export class QuizsAssignedToStudentComponent {
  constructor(private assignQuizService:AssignQuizService,private route:ActivatedRoute){}
  assignQuizs:AssignQuiz[]=[]
  ngOnInit() {
    this.getQuizsByStudent(1)
  }
  getQuizsByStudent(id:number)
  {
    this.assignQuizService.getByStudent(id).subscribe(
      res => {
        this.assignQuizs=res
      }
    )
  }
}
