import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Contact } from '../models/contact';

@Injectable({
    providedIn: 'root',
})
export class ContactService {
    constructor(private http: HttpClient) {}

    list(): Observable<any> {
        return this.http.get(environment.apiUrl);
    }
    create(contact: Contact): Observable<any> {
        return this.http.post(environment.apiUrl, contact);
    }
    edit(id: any, contact: Contact): Observable<any> {
        return this.http.put(`${environment.apiUrl}${id}/`, contact);
    }
    delete(id: any) {
        return this.http.delete(`${environment.apiUrl}${id}/`);
    }
}
