import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { QuestionReq } from '../Models/QuestionReq.model';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  getSomeData(page:number): Observable<any> {
    return this.http.get(`${this.apiUrl}/question?size=8&page=`+page);
  }

  getOneSubject(id:number): Observable<any> {
    return this.http.get(`${this.apiUrl}/question/`+id);
  }

  postData(data: QuestionReq): Observable<any> {
    return this.http.post(`${this.apiUrl}/question`, data);
  }

  putData(data: any,id:number): Observable<any> {
    return this.http.put(`${this.apiUrl}/question/`+id, data);
  }

  deleteData(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/question/delete/${id}`);
  }
}
