import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { EmpleadosService } from '../../services/empleados.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-empleado',
  standalone: true,
  imports: [ CommonModule, FormsModule, ReactiveFormsModule ],
  templateUrl: './editar-empleado.component.html',
  styleUrl: './editar-empleado.component.css'
})
export class EditarEmpleadoComponent {

  data: any
  formGroup: FormGroup;
  codigo: number = NaN
  nombre: string = ''
  apellido1: string = ''
  apellido2: string = ''
  codigo_departamento: string = ''

  constructor(private empleadosService: EmpleadosService, private router: Router, private formBuilder: FormBuilder, private activeRoute: ActivatedRoute ) { 

    this.formGroup = this.formBuilder.group({
      codigo: [''],
      nombre: [''],
      apellido1: [''],
      apellido2: [''],
      codigo_departamento: ['']
    })

  }

  ngOnInit(): void {
    const empleadoId: string | null = this.activeRoute.snapshot.paramMap.get('id')
    if(empleadoId) {
      this.empleadosService.encontrarEmpleado(empleadoId).subscribe(
        response => {
          this.data = response.msg
          this.formGroup.patchValue({
            codigo: this.data.codigo,
            nombre: this.data.nombre,
            apellido1: this.data.apellido1,
            apellido2: this.data.apellido2,
            codigo_departamento: this.data.codigo_departamento
          })
        }, 
        error => {
          console.log('error', error)
        }
      )
    }
  }

  onSubmit(event: Event): void {
    event.preventDefault()
    const id: string | null = this.activeRoute.snapshot.paramMap.get('id')
    if (id) {
      const formData = this.formGroup.value;
      this.empleadosService.actualizarEmpleado( id, formData.codigo, formData.nombre, formData.apellido1, formData.apellido2, formData.codigo_departamento ).subscribe(
        response => {
          if(response.ok) {
            Swal.fire('Empleado actualizado', response.msg, 'success')
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

}
