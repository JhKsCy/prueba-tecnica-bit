import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, FormGroup, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DepartamentosService } from '../../services/departamentos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-departamento',
  standalone: true,
  imports: [ CommonModule, FormsModule, ReactiveFormsModule ],
  templateUrl: './editar-departamento.component.html',
  styleUrl: './editar-departamento.component.css'
})
export class EditarDepartamentoComponent {

  data: any
  formGroup: FormGroup;
  nombre: string = ''

  constructor(private departamentosService: DepartamentosService, private router: Router, private formBuilder: FormBuilder, private activeRoute: ActivatedRoute ) { 

    this.formGroup = this.formBuilder.group({
      nombre: ['']
    })

  }

  ngOnInit(): void {
    const departamentoId: string | null = this.activeRoute.snapshot.paramMap.get('id')
    if(departamentoId) {
      this.departamentosService.encontrarDepartamento(departamentoId).subscribe(
        response => {
          this.data = response.msg
          this.formGroup.patchValue({
            nombre: this.data.nombre
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
    if(id) {
      const formData = this.formGroup.value;
      this.departamentosService.actualizarDepartamento( id, formData.nombre ).subscribe(
        response => {
          if(response.ok) {
            Swal.fire('Departamento actualizado', response.msg, 'success')
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

}
