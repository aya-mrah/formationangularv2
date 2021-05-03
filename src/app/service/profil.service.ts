import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfilService {

private baseUrl = 'http://localhost:8090';

     constructor(private http: HttpClient) { }

     getProfil(id: number): Observable<any> {
       return this.http.get(`//localhost:8090/profil/${id}`);
     }

     createProfil(profil: Object): Observable<Object> {
       return this.http.post(`//localhost:8090/addprofil`, profil);
     }

     updateProfil(id: number, value: any): Observable<Object> {
       return this.http.put(`//localhost:8090/updateprofil/${id}`, value);
     }

     deleteProfil(id: number): Observable<any> {
       return this.http.delete(`//localhost:8090/deleteprofil/${id}`, { responseType: 'text' });
     }

     getProfilsList() {
       return this.http.get(`//localhost:8090/profils`);
     }
}
