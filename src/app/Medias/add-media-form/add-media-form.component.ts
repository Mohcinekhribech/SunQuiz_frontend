import { Component } from '@angular/core';
import { Media } from 'src/app/Core/Models/Media.model';
import { MediaService } from 'src/app/Core/Services/media.service';
import swal from 'sweetalert'

@Component({
  selector: 'app-add-media-form',
  templateUrl: './add-media-form.component.html',
  styleUrls: ['./add-media-form.component.css']
})
export class AddMediaFormComponent {
  constructor(private mediaService: MediaService) {}
  ngOnInit(){}
  media:Media = {
    id: 0,
    type: '',
    link: '',
    description: ''
  }
  postData()
  {
    this.mediaService.postData(this.media).subscribe(
      ()=>swal("Media Created!", "You clicked the button!", "success")
    )
  }
}
