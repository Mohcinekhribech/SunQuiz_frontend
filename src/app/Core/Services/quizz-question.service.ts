import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { QuizzQuestionReq } from '../Models/QuizzQuestionReq.model';

@Injectable({
  providedIn: 'root'
})
export class QuizzQuestionService {
  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  getSomeData(page:number): Observable<any> {
    return this.http.get(`${this.apiUrl}/quizz/questions?size=8&page=`+page);
  }

  getOneQuizzQuestion(id:number): Observable<any> {
    return this.http.get(`${this.apiUrl}/quizz/questions/`+id);
  }

  postData(data: QuizzQuestionReq): Observable<any> {
    return this.http.post(`${this.apiUrl}/quizz/questions`, data);
  }

  putData(data: any,id:number): Observable<any> {
    return this.http.put(`${this.apiUrl}/quizz/questions/`+id, data);
  }

  deleteData(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/quizz/questions/delete/${id}`);
  }
}
