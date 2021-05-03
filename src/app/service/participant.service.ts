import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ParticipantService {

  constructor(private http: HttpClient) { }

  getParticipantsList() {
    return this.http.get(`//localhost:8090/participants`);
  }

  getParticipant(id: number): Observable<any> {
    return this.http.get(`//localhost:8090/participant/${id}`);
  }

  createParticipant(participant: Object): Observable<Object> {
    return this.http.post(`//localhost:8090/addparticipant`, participant);
  }

  updateParticipant(id: number, value: any): Observable<Object> {
    return this.http.put(`//localhost:8090/updateparticipant/${id}`, value);
  }

  deleteParticipant(id: number): Observable<any> {
    return this.http.delete(`//localhost:8090/deleteparticipant/${id}`, { responseType: 'text' });
  }
}
