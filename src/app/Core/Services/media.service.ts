import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class MediaService {
  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  getSomeData(page:number): Observable<any> {
    return this.http.get(`${this.apiUrl}/media?size=8&page=`+page);
  }

  getOneMedia(id:number): Observable<any> {
    return this.http.get(`${this.apiUrl}/media/`+id);
  }

  postData(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/media`, data);
  }

  putData(data: any,id:number): Observable<any> {
    return this.http.put(`${this.apiUrl}/media/`+id, data);
  }

  deleteData(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/media/delete/${id}`);
  }
}
