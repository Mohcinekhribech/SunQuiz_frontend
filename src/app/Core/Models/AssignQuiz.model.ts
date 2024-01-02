import { QuizReq } from "./QuizReq.model"
import { Validation } from "./Validation.model"

export interface AssignQuiz {
    id:number
    chance:number
    startDate:Date
    endDate:Date
    score:Date
    result:boolean
    quizz:QuizReq
    student:Object
    validations:Validation[]
}