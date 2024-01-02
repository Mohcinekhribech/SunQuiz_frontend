import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChatMessageReq } from 'src/app/Core/Models/ChatMessageReq.model';
import { ChatMessageResp } from 'src/app/Core/Models/ChatMessageResp.model';
import { RoomResp } from 'src/app/Core/Models/RoomResp.model';
import { ChatService } from 'src/app/Core/Services/chat.service';
import { RoomService } from 'src/app/Core/Services/room.service';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.css']
})
export class ConversationComponent {
  @Input() roomId : number = 0;
  messageInput : String = "";
  userId : number = 0;
  messageList :ChatMessageResp[]=[];
  room :RoomResp={
    id: 0,
    name: '',
    owner: null,
    messages: []
  };
    
  constructor(private chatService :ChatService, private route :ActivatedRoute, private roomService : RoomService){
  }

  ngOnInit(): void{
    this.getRoom();
    this.userId =this.route.snapshot.params["id"];
    this.listenerMessage();
    this.chatService.joinRoom(1);
  }

  getRoom()
  {
    this.roomService.getOneRoom(this.roomId).subscribe(res => {
    this.room = res
    })
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
      this.room.messages.push(messages)
      console.log('Message List:', this.messageList); // Log the entire messageList for debugging
    });
  }
}
