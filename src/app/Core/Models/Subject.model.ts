import { SubjectReq } from "./SubjectReq"

export interface Subject {
    id:0
    title:''
    parentSubject:SubjectReq | null
    childSubjects:Subject[]
    parentSubject_id:0
}