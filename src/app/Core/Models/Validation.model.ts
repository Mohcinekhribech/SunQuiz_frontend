import { Answer } from "./Answer.model"

export interface Validation {
    id:0
    correct:boolean
    points:0
    answer:Answer|null
    question_id:number
}