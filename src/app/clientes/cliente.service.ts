import { Injectable } from '@angular/core';
import { Cliente } from './cliente';
import { Observable, map, of, pipe } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  urlEndPoint = "http://localhost:8080/api/clients";

  constructor(private http: HttpClient) { }
  /*
    getClientes(): Observable<Cliente[]> {
      return this.http.get<Cliente[]>(this.urlEndPoint);
    }*/

  getClientes(): Observable<Cliente[]> {
    return this.http.get(this.urlEndPoint).pipe(
      map(response => response as Cliente[])
    );
  }

}
