import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AlumnoService {

  private apiUrl = 'http://localhost:3000/api/alumnos'; // URL de la API en backend

  //Se pasa al constructor una instancia de Angular para hacer solicitudes HTTP desde el frontend hacia el backend
  constructor(private http: HttpClient) { }


  //Método para obtener todos los alumnos
  getAlumnos(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/all`);
  }


  //Método para insertar un alumno
  insertarAlumno(alumno: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/insert`, alumno);
  }


  // Método para modificar un alumno
  updateAlumno(idAlumno: any, alumno: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/update/${idAlumno}`, alumno);
  }


  // Método para eliminar un alumno
  deleteAlumno(idAlumno: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/delete/${idAlumno}`);
  }

  //Método para inscribir un alumno en un curso
  inscribirAlumno(inscripcion: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/inscription`, inscripcion);
  }
 
}


