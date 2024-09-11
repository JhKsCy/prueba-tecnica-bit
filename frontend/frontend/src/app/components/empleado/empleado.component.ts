import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpleadosService } from '../../services/empleados.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-empleado',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './empleado.component.html',
  styleUrl: './empleado.component.css'
})
export class EmpleadoComponent {

  empleado: any

  constructor ( private empleadosService: EmpleadosService, private activeRoute: ActivatedRoute, private router: Router ) {}

  ngOnInit(): void {
    const empleadoId: string | null = this.activeRoute.snapshot.paramMap.get('id')
    if(empleadoId) {
      this.empleadosService.encontrarEmpleado(empleadoId).subscribe(
        response => {
          this.empleado = response.msg
        }, 
        error => {
          console.log('error', error)
        }
      )
    }
  }

  eliminarEmpleado(empleadoId: string): void {
    Swal.fire({
      title: 'Está seguro que quiere eliminar a este empleado?',
      showCancelButton: true,
      confirmButtonText: 'Continuar'
    }).then((result => {
      if(result.isConfirmed) {
        this.empleadosService.eliminarEmpleado(empleadoId).subscribe(
          response => {
            console.log(response)
            Swal.fire('Empleado eliminado', response.msg, 'success')
            this.router.navigate(['/empleados'])
          },
          error => {
            console.log("error", error)
            Swal.fire('Error', error.error.msg, 'error')
          }
        )
      }
    }))
  }

  editarEmpleado(empleadoId: string): void {
    this.router.navigate([`/editar-empleado/${empleadoId}`]);
  }

}
