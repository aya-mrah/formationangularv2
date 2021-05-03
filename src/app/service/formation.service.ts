import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FormationService {

  constructor(private http: HttpClient) { }

  getFormationsList(): Observable<any> {
    return this.http.get(`//localhost:8090/formations`);
  }

  getFormation(id: number): Observable<any> {
    return this.http.get(`//localhost:8090/formation/${id}`);
  }

  createFormation(formation: Object): Observable<Object> {
    return this.http.post(`//localhost:8090/addformation`, formation);
  }

  updateFormation(id: number, value: any): Observable<Object> {
    return this.http.put(`//localhost:8090/updateformation/${id}`, value);
  }

  deleteFormation(id: number): Observable<any> {
    return this.http.delete(`//localhost:8090/deleteformation/${id}`, { responseType: 'text' });
  }
}
