import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class OrganismeService {

 private baseUrl = 'http://localhost:8090';

     constructor(private http: HttpClient) { }

     getOrganisme(id: number): Observable<any> {
       return this.http.get(`//localhost:8090/organisme/${id}`);
     }

     createOrganisme(organisme: Object): Observable<Object> {
       return this.http.post(`//localhost:8090/addorganisme`, organisme);
     }

     updateOrganisme(id: number, value: any): Observable<Object> {
       return this.http.put(`//localhost:8090/updateorganisme/${id}`, value);
     }

     deleteOrganisme(id: number): Observable<any> {
       return this.http.delete(`//localhost:8090/deleteorganisme/${id}`, { responseType: 'text' });
     }

     getOrganismesList(){
       return this.http.get(`//localhost:8090/organismes`);
     }
}
