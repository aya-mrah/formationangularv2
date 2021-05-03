import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaysService {
private baseUrl = 'http://localhost:8090';

     constructor(private http: HttpClient) { }

     getPays(id: number){
       return this.http.get(`//localhost:8090/pays/${id}`);
     }

     createPays(pays: Object): Observable<Object> {
       return this.http.post(`//localhost:8090/addpays`, pays);
     }

     updatePays(id: number, value: any): Observable<Object> {
       return this.http.put(`//localhost:8090/updatepays/${id}`, value);
     }

     deletePays(id: number): Observable<any> {
       return this.http.delete(`//localhost:8090/deletepays/${id}`, { responseType: 'text' });
     }

     getPayssList(): Observable<any> {
       return this.http.get(`//localhost:8090/payss`);
     }

}
