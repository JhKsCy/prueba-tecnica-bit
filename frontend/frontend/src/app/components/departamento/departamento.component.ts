import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { DepartamentosService } from '../../services/departamentos.service';
import { CardEmpleadoComponent } from '../card-empleado/card-empleado.component';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-departamento',
  standalone: true,
  imports: [ CommonModule, CardEmpleadoComponent ],
  templateUrl: './departamento.component.html',
  styleUrl: './departamento.component.css'
})
export class DepartamentoComponent {

  departamento: any

  constructor ( private departamentosService: DepartamentosService, private activeRoute: ActivatedRoute, private router: Router ) {}

  ngOnInit(): void {
    const departamentoId: string | null = this.activeRoute.snapshot.paramMap.get('id')
    if(departamentoId) {
      this.departamentosService.encontrarDepartamento(departamentoId).subscribe(
        response => {
          this.departamento = response.msg
        }, 
        error => {
          console.log('error', error)
        }
      )
    }
  }

  eliminarDepartamento(departamentoId: string): void {
    Swal.fire({
      title: 'Está seguro que quiere eliminar este departamento?',
      showCancelButton: true,
      confirmButtonText: 'Continuar'
    }).then((result => {
      if(result.isConfirmed) {
        this.departamentosService.eliminarDepartamento(departamentoId).subscribe(
          response => {
            console.log(response)
            Swal.fire('Departamento eliminado', response.msg, 'success')
            this.router.navigate(['/departamentos'])
          },
          error => {
            console.log("error", error)
            Swal.fire('Error', error.error.msg, 'error')
          }
        )
      }
    }))
  }

  editarDepartamento(departamentoId: string): void {
    this.router.navigate([`/editar-departamento/${departamentoId}`]);
  }

}
