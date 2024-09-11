import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { EmpleadosService } from '../../services/empleados.service';
import { DepartamentosService } from '../../services/departamentos.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-nuevo-empleado',
  standalone: true,
  imports: [ FormsModule ],
  templateUrl: './nuevo-empleado.component.html',
  styleUrl: './nuevo-empleado.component.css'
})
export class NuevoEmpleadoComponent {

  codigo: number = NaN
  nombre: string = ''
  apellido1: string = ''
  apellido2: string = ''
  codigo_departamento: string = ''

  constructor(private empleadosService: EmpleadosService, private departamentosService: DepartamentosService, private router: Router) { }

  onSubmit(event: Event): void {
    event.preventDefault()
    this.empleadosService.crearEmpleado( this.codigo, this.nombre, this.apellido1, this.apellido2, this.codigo_departamento ).subscribe(
      response => {
        if(response.ok) {
          Swal.fire('Empleado creado', response.msg, 'success')
          this.router.navigate(['/empleados'])
        } else {
          Swal.fire('Error', response.error.msg, 'error')
        }
      },
      error => {
        console.log(error)
      }
    )
  }

}
