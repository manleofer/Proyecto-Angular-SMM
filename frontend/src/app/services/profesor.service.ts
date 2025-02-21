import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfesorService {

  private apiUrl = 'http://localhost:3000/api/profesores'; // URL del backend

  constructor(private http: HttpClient) { }

  //Método para insertar un alumno
  insertarProfesor(profesor: any): Observable<any>{
  return this.http.post(`${this.apiUrl}/insert`, profesor);
  }
}
