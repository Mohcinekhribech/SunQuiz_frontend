import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentAnswerService {
  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}


  postData(assignquiz_id:number,validation_id:number): Observable<any> {
    return this.http.post(`${this.apiUrl}/studentAnswers/${assignquiz_id}/${validation_id}`,{});
  }


  deleteData(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/studentAnswers/delete/${id}`);
  }
}
