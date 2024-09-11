import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { EmpleadosService } from '../../services/empleados.service';

@Component({
  selector: 'app-card-empleado',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './card-empleado.component.html',
  styleUrl: './card-empleado.component.css'
})
export class CardEmpleadoComponent {
  
  empleados: any [] = []

  constructor ( private empleadosService: EmpleadosService, private router: Router, private activeRoute: ActivatedRoute ) {}

  ngOnInit(): void {
    this.todosLosEmpleados()
  }

  todosLosEmpleados(): void {
    const departamentoEmpleado: string | null = this.activeRoute.snapshot.paramMap.get('id');

    this.empleadosService.empleados().subscribe(
      response => {
        const empleadosTotales: any[] = response.empleados;
        let empleadosFiltrados = empleadosTotales;

        if(departamentoEmpleado) {
          empleadosFiltrados = empleadosFiltrados.filter(x => x.codigo_departamento === departamentoEmpleado )
        }

        console.log(empleadosFiltrados)
        this.empleados = empleadosFiltrados;

      },
      error => {
        console.log("error", error);
      }
    )
  }

  mostrarEmpleado(empleadoId: string): void {
    this.router.navigate(['/empleado', empleadoId])
  }

}
