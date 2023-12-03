import { Level } from "./Level.model"
import { Media } from "./Media.model"
import { SubjectReq } from "./SubjectReq"
import { Validation } from "./Validation.model"

export interface Question {
        id: 0
        text: ""
        type: "MULTI_CHOICE" | "SINGLE_CHOICE" | "DIRECT" | ""
        subject: SubjectReq | null
        level:Level | null
        media: Media | null
        validations: Validation[]
}