import { Injectable } from '@angular/core';
import { Stomp } from '@stomp/stompjs';
import { BehaviorSubject } from 'rxjs';
import * as SockJS from 'sockjs-client';
import { ChatMessageReq } from '../Models/ChatMessageReq.model';
import { ChatMessageResp } from '../Models/ChatMessageResp.model';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private stompClient : any
  private messageSubject : BehaviorSubject<ChatMessageResp[]> = new BehaviorSubject<ChatMessageResp []>([]);

  constructor() {
    this.initConnectionSocket();
   }

  initConnectionSocket(){

    const  url= 'http://localhost:8080/ws'
    const socket = new SockJS(url);
    this.stompClient = Stomp.over(socket)
  }
  
  joinRoom(roomId :number){
    this.stompClient.connect({},()=>{
      this.stompClient.subscribe(`/topic/${roomId}`, (messages: any)=> { 
        const messageContent = JSON.parse(messages.body);
        console.log(messageContent);
        
        const currentMessage =this.messageSubject.getValue();
        currentMessage.push(messageContent);
        this.messageSubject.next(currentMessage);
      })
    })
  }

  sendMessage(roomId:number,ChatMessage: ChatMessageReq){
    this.stompClient.send(`/app/chat/${roomId}`, {},JSON.stringify(ChatMessage))
  }


  getMessageSubject(){
    return this.messageSubject.asObservable();
  }
}
