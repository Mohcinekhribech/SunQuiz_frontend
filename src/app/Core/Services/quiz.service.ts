import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { QuizReq } from '../Models/QuizReq.model';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  getSomeData(page:number): Observable<any> {
    return this.http.get(`${this.apiUrl}/quizz?size=8&page=`+page);
  }

  getOneQuiz(id:number): Observable<any> {
    return this.http.get(`${this.apiUrl}/quizz/`+id);
  }

  postData(data: QuizReq): Observable<any> {
    return this.http.post(`${this.apiUrl}/quizz`, data);
  }

  putData(data: any,id:number): Observable<any> {
    return this.http.put(`${this.apiUrl}/quizz/`+id, data);
  }

  deleteData(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/quizz/delete/${id}`);
  }
}
