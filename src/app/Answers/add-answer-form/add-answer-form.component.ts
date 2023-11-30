import { Component } from '@angular/core';
import { Answer } from 'src/app/Core/Models/Answer.model';
import { AnswerService } from 'src/app/Core/Services/answer.service';
import swal from 'sweetalert'

@Component({
  selector: 'app-add-answer-form',
  templateUrl: './add-answer-form.component.html',
  styleUrls: ['./add-answer-form.component.css']
})
export class AddAnswerFormComponent {
  constructor(private answerService:AnswerService){}

  ngOnInit(){}

  answer:Answer = {
    id: 0,
    text: '',
    validations: []
  }
  
  postData()
  {
    this.answerService.postData(this.answer).subscribe(
      ()=>swal("Subject Created!", "You clicked the button!", "success")
    )
  }
}