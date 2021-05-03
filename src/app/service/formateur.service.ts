import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormateurService {

 private baseUrl = 'http://localhost:8090';

      constructor(private http: HttpClient) { }

      getFormateur(id: number): Observable<any> {
        return this.http.get(`//localhost:8090/formateur/${id}`);
      }

      createFormateur(formateur: Object): Observable<Object> {
        return this.http.post(`//localhost:8090/addformateur`, formateur);
      }

      updateFormateur(id: number, value: any): Observable<Object> {
        return this.http.put(`//localhost:8090/updateformateur/${id}`, value);
      }

      deleteFormateur(id: number): Observable<any> {
        return this.http.delete(`//localhost:8090/deleteformateur/${id}`, { responseType: 'text' });
      }

      getFormateursList() {
        return this.http.get(`//localhost:8090/formateurs`);
      }
}
