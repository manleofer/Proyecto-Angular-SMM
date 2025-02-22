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
    return this.http.get<any>(this.apiUrl);
  }
  
  //Método para insertar un alumno
  insertarAlumno(alumno: any): Observable<any>{
    return this.http.post(`${this.apiUrl}/insert`, alumno);
    }


  // Método para eliminar un alumno
  deleteAlumno(id: number): Observable<any> {
    return this.http.delete<any>(this.apiUrl + "/delete/" + id);
  }


}


