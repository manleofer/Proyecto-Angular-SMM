import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CursoService {

  private apiUrl = 'http://localhost:3000/api/cursos'; // URL de la API en backend

  //Se pasa al constructor una instancia de Angular para hacer solicitudes HTTP desde el frontend hacia el backend
  constructor(private http: HttpClient) { }

  //Método para obtener todos los cursos
  getCursos(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/all`);
  }

  //Método para insertar un curso
  insertarCurso(curso: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/insert`, curso);
  }

 // Método para modificar un curso
  updateCurso(idCurso: string, curso: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/update/${idCurso}`, curso);
  }

  // Método para eliminar un curso
  deleteCurso(idCurso: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/delete/${idCurso}`);
  }

}
