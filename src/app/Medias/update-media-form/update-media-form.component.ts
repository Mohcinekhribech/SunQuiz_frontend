import { Component, Input } from '@angular/core';
import { Media } from 'src/app/Core/Models/Media.model';
import { MediaService } from 'src/app/Core/Services/media.service';
import swal from 'sweetalert'

@Component({
  selector: 'app-update-media-form',
  templateUrl: './update-media-form.component.html',
  styleUrls: ['./update-media-form.component.css']
})
export class UpdateMediaFormComponent {

  constructor(private mediaService: MediaService) {}
  
  media:Media = {
    id: 0,
    link: '',
    description: '',
    type: ''
  }
  @Input() id: number=0;

  ngOnInit(){
    this.mediaService.getOneMedia(this.id).subscribe(
      res=>{
        this.media.id = res.id
        this.media.link = res.link
        this.media.type = res.type
        this.media.description = res.description
      }
    )
  }

  putData()
  {
    this.mediaService.putData(this.media,this.id).subscribe(
      ()=>swal("Media Updated!", "You clicked the button!", "success")
    )
  }  
}
