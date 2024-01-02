import { Component } from '@angular/core';
import { RoomReq } from 'src/app/Core/Models/RoomReq.model';
import { RoomService } from 'src/app/Core/Services/room.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent {
  rooms :RoomReq[]=[];
  roomId : number = 1;
  constructor(private roomService : RoomService){
  }

  ngOnInit(): void{
    this.getAllRoom();
  }

  getAllRoom()
  {
    this.roomService.getSomeData(0).subscribe(res => this.rooms = res.content)
  }

  chooseConversation(id:number)
  {
    this.roomId = id
  }
}
