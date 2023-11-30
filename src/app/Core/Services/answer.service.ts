import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class AnswerService {
  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  getSomeData(page:number): Observable<any> {
    return this.http.get(`${this.apiUrl}/answer?size=8&page=`+page);
  }

  getOneLevel(id:number): Observable<any> {
    return this.http.get(`${this.apiUrl}/answer/`+id);
  }

  postData(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/answer`, data);
  }

  putData(data: any,id:number): Observable<any> {
    return this.http.put(`${this.apiUrl}/answer/`+id, data);
  }

  deleteData(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/answer/delete/${id}`);
  }
}
