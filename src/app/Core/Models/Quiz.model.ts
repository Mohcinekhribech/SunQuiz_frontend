import { QuizzQuestion } from "./QuizzQuestion.model"
import { Teacher } from "./Teacher.model"

export interface Quiz {
    id:0
    passScore:number
    chances:number
    comment:String
    duration:String
    teacher:Teacher | null
    quizzQuestions:QuizzQuestion[]
}