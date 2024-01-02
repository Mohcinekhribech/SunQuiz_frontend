import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  public getSomeData(page:number): Observable<any> {
    return this.http.get(`${this.apiUrl}/rooms?size=8&page=`+page);
  }

  getOneRoom(id:number): Observable<any> {
    return this.http.get(`${this.apiUrl}/rooms/`+id);
  }

  postData(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/rooms`, data);
  }

  putData(data: any,id:number): Observable<any> {
    return this.http.put(`${this.apiUrl}/rooms/`+id, data);
  }

  deleteData(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/rooms/delete/${id}`);
  }
}
