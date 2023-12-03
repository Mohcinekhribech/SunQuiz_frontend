import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ValidationReq } from '../Models/ValidationReq.model';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {
  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  public getSomeData(page:number): Observable<any> {
    return this.http.get(`${this.apiUrl}/validation?size=8&page=`+page);
  }

  getOneSubject(id:number): Observable<any> {
    return this.http.get(`${this.apiUrl}/validation/`+id);
  }

  postData(data: ValidationReq): Observable<any> {
    return this.http.post(`${this.apiUrl}/validation`, data);
  }

  putData(data: any,id:number): Observable<any> {
    return this.http.put(`${this.apiUrl}/validation/`+id, data);
  }

  deleteData(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/validation/delete/${id}`);
  }
}
