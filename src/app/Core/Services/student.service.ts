import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../Models/Student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  public getSomeData(page:number): Observable<any> {
    return this.http.get(`${this.apiUrl}/student?size=8&page=`+page);
  }

  getOneStudent(id:number): Observable<any> {
    return this.http.get(`${this.apiUrl}/student/`+id);
  }

  postData(data: Student): Observable<any> {
    return this.http.post(`${this.apiUrl}/student`, data);
  }

  putData(data: any,id:number): Observable<any> {
    return this.http.put(`${this.apiUrl}/student/`+id, data);
  }

  deleteData(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/student/delete/${id}`);
  }
}
