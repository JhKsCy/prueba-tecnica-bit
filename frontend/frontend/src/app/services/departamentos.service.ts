import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartamentosService {
  private apiUrl= "http://localhost:3030/api"

  constructor(private http: HttpClient) { }

  crearDepartamento(nombre: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/crear-departamento`, { nombre })
  }

  actualizarDepartamento(id: string, nombre: string): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/actualizar-departamento/${id}`, { nombre })
  }

  eliminarDepartamento(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/eliminar-departamento/${id}`)
  }

  encontrarDepartamento(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/departamento/${id}`)
  }

  departamentos(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/departamentos`)
  }

}
