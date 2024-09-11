import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { DepartamentosService } from '../../services/departamentos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-nuevo-departamento',
  standalone: true,
  imports: [ FormsModule ],
  templateUrl: './nuevo-departamento.component.html',
  styleUrl: './nuevo-departamento.component.css'
})
export class NuevoDepartamentoComponent {

  nombre: string = ''

  constructor(private departamentosService: DepartamentosService, private router: Router) { }

  onSubmit(event: Event): void {
    event.preventDefault()
    this.departamentosService.crearDepartamento( this.nombre ).subscribe(
      response => {
        if(response.ok) {
          Swal.fire('Departamento creado', response.msg, 'success')
          this.router.navigate(['/departamentos'])
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
