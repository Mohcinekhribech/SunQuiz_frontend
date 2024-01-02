import { User } from "./User.model";

export interface ChatMessageResp{
    content: String ;
    sender: User;
    room: Object
    time : String
}