import { Component, Input } from '@angular/core';
import { Answer } from 'src/app/Core/Models/Answer.model';
import { AnswerService } from 'src/app/Core/Services/answer.service';
import swal from 'sweetalert'

@Component({
  selector: 'app-update-answer-form',
  templateUrl: './update-answer-form.component.html',
  styleUrls: ['./update-answer-form.component.css']
})
export class UpdateAnswerFormComponent {
  constructor(private answerService: AnswerService) {}
  answer:Answer = {
    id:0,
    text:''
  }
  @Input() id: number=0;
  ngOnInit(){
    this.answerService.getOneLevel(this.id).subscribe(
      res=>{
        this.answer.id = res.id
        this.answer.text = res.text

      }
    )
  }
  putData()
  {
    this.answerService.putData(this.answer,this.id).subscribe(
      ()=>swal("Answer Updated!", "You clicked the button!", "success")
    )
  }
}
