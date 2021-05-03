import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  constructor(private http: HttpClient) { }

  getSessionsList() {
    return this.http.get(`//localhost:8090/sessions`);
  }

  getSession(id: number): Observable<any> {
    return this.http.get(`//localhost:8090/session/${id}`);
  }

  createSession(session: Object): Observable<Object> {
    return this.http.post(`//localhost:8090/addsession`, session);
  }

  updateSession(id: number, value: any): Observable<Object> {
    return this.http.put(`//localhost:8090/updatesession/${id}`, value);
  }

  deleteSession(id: number): Observable<any> {
    return this.http.delete(`//localhost:8090/deletesession/${id}`, { responseType: 'text' });
  }
}
