import { Question } from "./Question.model"
import { QuizReq } from "./QuizReq.model"

export interface QuizzQuestion {
    id:0
    duration:number
    quizz:QuizReq |null
    question:Question | null
}