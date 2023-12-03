import { Component, EventEmitter, Output } from '@angular/core';
import { Level } from 'src/app/Core/Models/Level.model';
import { LevelService } from 'src/app/Core/Services/level.service';

@Component({
  selector: 'app-question-info',
  templateUrl: './question-info.component.html',
  styleUrls: ['./question-info.component.css']
})
export class QuestionInfoComponent {
  @Output() childEvent = new EventEmitter<Object | null>();
  constructor(private levelService:LevelService){}
  questionInfo = {
    text:'',
    type:'',
    level_id:0
  }
  levels:Level[]=[];
  ngOnInit() {
    this.getLevels()
  }
  sendDataToParent()
  {
    (this.questionInfo.text !== '' && this.questionInfo.type !== '' && this.questionInfo.level_id !== 0)?
      this.childEvent.emit(this.questionInfo) : this.childEvent.emit(null) ;
  }
  getLevels()
  {
    this.levelService.getSomeData(0).subscribe(
      res => this.levels = res.content
    );
  }
}