import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  private apiUrl = 'http://localhost:3000/api/cursos'; // URL del backend

  constructor(private http: HttpClient) { }

  //Método para insertar un alumno
  insertarCurso(curso: any): Observable<any>{
  return this.http.post(`${this.apiUrl}/insert`, curso);
  }
}
