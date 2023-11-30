import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LevelTableComponent } from './levels/level-table/level-table.component';
import { SubjectTableComponent } from './subjects/subject-table/subject-table.component';
import { AnswerTableComponent } from './Answers/answer-table/answer-table.component';
import { MediaTableComponent } from './Medias/media-table/media-table.component';

const routes: Routes = [
  {path:'levels',component:LevelTableComponent},
  {path:'subjects',component:SubjectTableComponent},
  {path:'answers',component:AnswerTableComponent},
  {path:'medias',component:MediaTableComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
