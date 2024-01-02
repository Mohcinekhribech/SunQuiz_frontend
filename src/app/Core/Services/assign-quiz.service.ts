import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AssignQuizService {
  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  getSomeData(): Observable<any> {
    return this.http.get(`${this.apiUrl}/assignQuizz`);
  }

  getByStudent(student_id:number): Observable<any> {
    return this.http.get(`${this.apiUrl}/assignQuizz/student/`+student_id);
  }

  postData(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/assignQuizz`, data);
  }

  putData(data: any,id:number): Observable<any> {
    return this.http.put(`${this.apiUrl}/assignQuizz/`+id, data);
  }

  deleteData(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/assignQuizz/delete/${id}`);
  }
}
