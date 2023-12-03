import { Component, EventEmitter, Output } from '@angular/core';
import { Media } from 'src/app/Core/Models/Media.model';
import { MediaService } from 'src/app/Core/Services/media.service';

@Component({
  selector: 'app-choose-media-for-question',
  templateUrl: './choose-media-for-question.component.html',
  styleUrls: ['./choose-media-for-question.component.css']
})
export class ChooseMediaForQuestionComponent {
  
  constructor(private mediaService:MediaService){}

  @Output() childEvent = new EventEmitter<Object | null>();

  media:Media={
    id: 0,
    type: '',
    link: '',
    description: ''
  }

  medias:Media[]=[]

  ngOnInit(){
    this.getSubjects()
  }
  getSubjects()
  {
    this.mediaService.getSomeData(0).subscribe(
      res => this.medias = res.content
    )
  }
  chooseSubject(media:Media)
  {
    this.media = media;
  }

  sendDataToParent()
  {
    (this.media.id != 0)?
      this.childEvent.emit(this.media) : this.childEvent.emit(null) ;
  }
}
