import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs'
import { SubjectReq } from '../Models/SubjectReq';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {
  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  public getSomeData(page:number): Observable<any> {
    return this.http.get(`${this.apiUrl}/subject?size=8&page=`+page);
  }

  getOneSubject(id:number): Observable<any> {
    return this.http.get(`${this.apiUrl}/subject/`+id);
  }

  postData(data: SubjectReq): Observable<any> {
    return this.http.post(`${this.apiUrl}/subject`, data);
  }

  putData(data: any,id:number): Observable<any> {
    return this.http.put(`${this.apiUrl}/subject/`+id, data);
  }

  deleteData(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/subject/delete/${id}`);
  }
}
