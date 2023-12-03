import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LevelTableComponent } from './levels/level-table/level-table.component';
import { SubjectTableComponent } from './subjects/subject-table/subject-table.component';
import { AnswerTableComponent } from './Answers/answer-table/answer-table.component';
import { MediaTableComponent } from './Medias/media-table/media-table.component';
import { QuestionTableComponent } from './Questions/question-table/question-table.component';
import { QuestionInfoComponent } from './Questions/question-info/question-info.component';
import { AddQuestionFormComponent } from './Questions/add-question-form/add-question-form.component';

const routes: Routes = [
  {path:'levels',component:LevelTableComponent},
  {path:'subjects',component:SubjectTableComponent},
  {path:'questions',component:QuestionTableComponent},
  {path:'medias',component:MediaTableComponent},
  {path:'answers',component:AnswerTableComponent},
  {path:'question-info',component:QuestionInfoComponent},
  {path:'add-question',component:AddQuestionFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
