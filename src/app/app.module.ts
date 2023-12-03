import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { LevelTableComponent } from './levels/level-table/level-table.component';
import { HttpClientModule } from '@angular/common/http';
import { LevelService } from './Core/Services/level.service';
import { AddLevelFormComponent } from './levels/add-level-form/add-level-form.component';
import { FormsModule } from '@angular/forms';
import { UpdateLevelFormComponent } from './levels/update-level-form/update-level-form.component';
import { SubjectTableComponent } from './subjects/subject-table/subject-table.component';
import { AddSubjectFormComponent } from './subjects/add-subject-form/add-subject-form.component';
import { UpdateSubjectFormComponent } from './subjects/update-subject-form/update-subject-form.component';
import { AnswerTableComponent } from './Answers/answer-table/answer-table.component';
import { AddAnswerFormComponent } from './Answers/add-answer-form/add-answer-form.component';
import { UpdateAnswerFormComponent } from './Answers/update-answer-form/update-answer-form.component';
import { MediaTableComponent } from './Medias/media-table/media-table.component';
import { AddMediaFormComponent } from './Medias/add-media-form/add-media-form.component';
import { UpdateMediaFormComponent } from './Medias/update-media-form/update-media-form.component';
import { QuestionTableComponent } from './Questions/question-table/question-table.component';
import { AddQuestionFormComponent } from './Questions/add-question-form/add-question-form.component';
import { UpdateQuestionFormComponent } from './Questions/update-question-form/update-question-form.component';
import { QuestionInfoComponent } from './Questions/question-info/question-info.component';
import { ChooseSubjectForQuestionComponent } from './Questions/choose-subject-for-question/choose-subject-for-question.component';
import { ChooseMediaForQuestionComponent } from './Questions/choose-media-for-question/choose-media-for-question.component';
import { ChooseAnswersForQuestionComponent } from './Questions/choose-answers-for-question/choose-answers-for-question.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminDashboardComponent,
    LevelTableComponent,
    AddLevelFormComponent,
    UpdateLevelFormComponent,
    SubjectTableComponent,
    AddSubjectFormComponent,
    UpdateSubjectFormComponent,
    AnswerTableComponent,
    AddAnswerFormComponent,
    UpdateAnswerFormComponent,
    MediaTableComponent,
    AddMediaFormComponent,
    UpdateMediaFormComponent,
    QuestionTableComponent,
    AddQuestionFormComponent,
    UpdateQuestionFormComponent,
    QuestionInfoComponent,
    ChooseSubjectForQuestionComponent,
    ChooseMediaForQuestionComponent,
    ChooseAnswersForQuestionComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [LevelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
