import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  private apiUrl= "http://localhost:3030/api"

  constructor(private http: HttpClient) { }

  crearEmpleado(codigo: number, nombre: string, apellido1: string, apellido2: string, codigo_departamento: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/crear-empleado`, { codigo, nombre, apellido1, apellido2, codigo_departamento })
  }

  actualizarEmpleado(id: string, codigo: number, nombre: string, apellido1: string, apellido2: string, codigo_departamento: string): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/actualizar-empleado/${id}`, { codigo, nombre, apellido1, apellido2, codigo_departamento })
  }

  eliminarEmpleado(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/eliminar-empleado/${id}`)
  }

  encontrarEmpleado(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/empleado/${id}`)
  }

  empleados(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/empleados`)
  }
  
}
