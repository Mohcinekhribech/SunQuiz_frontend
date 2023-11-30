import { Component, Input } from '@angular/core';
import { Level } from 'src/app/Core/Models/Level.model';
import { LevelService } from 'src/app/Core/Services/level.service';
import swal from 'sweetalert'

@Component({
  selector: 'app-update-level-form',
  templateUrl: './update-level-form.component.html',
  styleUrls: ['./update-level-form.component.css']
})
export class UpdateLevelFormComponent {
  constructor(private levelService: LevelService) {}
  level:Level = {
    id:0,
    name:'',
    maxPoint:'',
    minPoint:''
  }
  @Input() id: number=0;
  ngOnInit(){
    this.levelService.getOneLevel(this.id).subscribe(
      res=>{
        console.log(res)
        this.level.id = res.id
        this.level.name = res.name
        this.level.maxPoint = res.maxPoint
        this.level.minPoint = res.minPoint

      }
    )
  }
  putData(id:number)
  {
    this.levelService.putData(this.level,id).subscribe(
      ()=>swal("Level Updated!", "You clicked the button!", "success")
    )
  }
}