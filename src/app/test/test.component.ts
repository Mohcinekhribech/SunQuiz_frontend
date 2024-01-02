import { Component, Input } from '@angular/core';
import { Stomp } from '@stomp/stompjs';
import * as SockJS from 'sockjs-client';
import { ChatService } from '../Core/Services/chat.service';
import { ActivatedRoute } from '@angular/router';
import { ChatMessageReq } from '../Core/Models/ChatMessageReq.model';
import { ChatMessageResp } from '../Core/Models/ChatMessageResp.model';
import { RoomService } from '../Core/Services/room.service';
import { RoomReq } from '../Core/Models/RoomReq.model';
import { RoomResp } from '../Core/Models/RoomResp.model';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
  
  roomId : number = 0;
  messageInput : String = "";
  userId : number = 0;
  messageList :ChatMessageResp[]=[];
  rooms :RoomReq[]=[];
  room :RoomResp={
    id: 0,
    name: '',
    owner: null,
    messages: []
  };
    
  constructor(private chatService :ChatService, private route :ActivatedRoute, private roomService : RoomService){
  }

  ngOnInit(): void{
    this.userId =this.route.snapshot.params["id"];
    this.roomId = this.route.snapshot.params["room"];
    this.listenerMessage();
    this.chatService.joinRoom(1);
    this.getAllRoom()
  }

  getRoom()
  {
    this.roomService.getOneRoom(this.roomId)
  }
  getAllRoom()
  {
    this.roomService.getSomeData(0).subscribe(res => this.rooms = res.content)
  }

  sendMessage(){
    const chatMessage ={
      content  : this.messageInput,
      sender_id : this.userId,
      room_id : 1
    } as ChatMessageReq

    this.chatService.sendMessage(1, chatMessage);
    this.messageInput = '';
  }

  

  listenerMessage() {
    console.log("test")
    this.chatService.getMessageSubject().subscribe((messages: any) => {
      this.messageList = messages
      console.log('Message List:', this.messageList); // Log the entire messageList for debugging
    });
  }
}
