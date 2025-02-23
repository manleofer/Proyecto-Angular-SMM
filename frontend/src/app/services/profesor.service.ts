import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProfesorService {
  private apiUrl = 'http://localhost:3000/api/profesores'; // URL de la API en backend

  //Método para obtener todos los profesores
  getProfesores(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/all`);
  }

  //Se pasa al constructor una instancia de Angular para hacer solicitudes HTTP desde el frontend hacia el backend
  constructor(private http: HttpClient) {}

  //Método para insertar un profesor
  insertarProfesor(profesor: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/insert`, profesor);
  }

  // Método para actualizar un profesor
  updateProfesor(idProfesor: string, profesor: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/update/${idProfesor}`, profesor);
  }

  // Método para eliminar un profesor
  deleteProfesor(idProfesor: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/delete/${idProfesor}`);
  }
}
