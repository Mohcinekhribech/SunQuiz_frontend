import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Teacher } from '../Models/Teacher.model';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {
  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  public getSomeData(page:number): Observable<any> {
    return this.http.get(`${this.apiUrl}/teacher?size=8&page=`+page);
  }

  getOneTeacher(id:number): Observable<any> {
    return this.http.get(`${this.apiUrl}/teacher/`+id);
  }

  postData(data: Teacher): Observable<any> {
    return this.http.post(`${this.apiUrl}/teacher`, data);
  }

  putData(data: any,id:number): Observable<any> {
    return this.http.put(`${this.apiUrl}/teacher/`+id, data);
  }

  deleteData(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/teacher/delete/${id}`);
  }
}
