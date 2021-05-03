import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DomaineService {
private baseUrl = 'http://localhost:8090';

     constructor(private http: HttpClient) { }

     getDomaine(id: number): Observable<any> {
       return this.http.get(`//localhost:8090/domaine/${id}`);
     }

     createDomaine(domaine: Object): Observable<Object> {
       return this.http.post(`//localhost:8090/adddomaine`, domaine);
     }

     updateDomaine(id: number, value: any): Observable<Object> {
       return this.http.put(`//localhost:8090/updatedomaine/${id}`, value);
     }

     deleteDomaine(id: number): Observable<any> {
       return this.http.delete(`//localhost:8090/deletedomaine/${id}`, { responseType: 'text' });
     }

     getDomainesList(): Observable<any> {
       return this.http.get(`//localhost:8090/domaines`);
     }
}
