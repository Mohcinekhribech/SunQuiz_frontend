import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LevelTableComponent } from './levels/level-table/level-table.component';
import { SubjectTableComponent } from './subjects/subject-table/subject-table.component';
import { AnswerTableComponent } from './Answers/answer-table/answer-table.component';
import { MediaTableComponent } from './Medias/media-table/media-table.component';
import { QuestionTableComponent } from './Questions/question-table/question-table.component';
import { QuestionInfoComponent } from './Questions/question-info/question-info.component';
import { AddQuestionFormComponent } from './Questions/add-question-form/add-question-form.component';
import { TeacherTableComponent } from './Teachers/teacher-table/teacher-table.component';
import { StudentTableComponent } from './Students/student-table/student-table.component';
import { AddQuizFormComponent } from './Quiz/add-quiz-form/add-quiz-form.component';
import { QuizTableComponent } from './Quiz/quiz-table/quiz-table.component';
import { PassingQuizComponent } from './StudentQuiz/passing-quiz/passing-quiz.component';
import { QuizsAssignedToStudentComponent } from './StudentQuiz/quizs-assigned-to-student/quizs-assigned-to-student.component';
import { TestComponent } from './test/test.component';
import { AlloComponent } from './allo/allo.component';
import { RoomsComponent } from './chat/rooms/rooms.component';

const routes: Routes = [
  {path:'levels',component:LevelTableComponent},
  {path:'subjects',component:SubjectTableComponent},
  {path:'questions',component:QuestionTableComponent},
  {path:'medias',component:MediaTableComponent},
  {path:'answers',component:AnswerTableComponent},
  {path:'teachers',component:TeacherTableComponent},
  {path:'question-info',component:QuestionInfoComponent},
  {path:'add-question',component:AddQuestionFormComponent},
  {path:'add-quiz',component:AddQuizFormComponent},
  {path:'quizs',component:QuizTableComponent},
  {path:'students',component:StudentTableComponent},
  {path:'pass-quiz/:id',component:PassingQuizComponent},
  {path:'quiz/student/:id',component:QuizsAssignedToStudentComponent},
  {path:'rooms/:id',component:RoomsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {  }
