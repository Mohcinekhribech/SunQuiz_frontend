import { ChatMessageResp } from "./ChatMessageResp.model"
import { User } from "./User.model"

export interface RoomResp{
    id : number
   name: String
   owner : User | null
   messages : ChatMessageResp[]
}