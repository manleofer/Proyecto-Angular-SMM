import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  private apiUrl = 'http://localhost:3000/api/alumnos'; // URL del backend

  constructor(private http: HttpClient) { }

  //Método para insertar un alumno
  insertarAlumno(alumno: any): Observable<any>{
  return this.http.post(`${this.apiUrl}/insert`, alumno);
  }
}
