import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { DepartamentosService } from '../../services/departamentos.service';


@Component({
  selector: 'app-card-departamento',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './card-departamento.component.html',
  styleUrl: './card-departamento.component.css'
})
export class CardDepartamentoComponent {

  departamento: any
  departamentos: any [] = []

  constructor ( private departamentosService: DepartamentosService, private router: Router ) {}

  ngOnInit(): void {
    this.todosLosDepartamentos()
  }

  todosLosDepartamentos(): void {
    this.departamentosService.departamentos().subscribe(
      response => {
        console.log(response)
        this.departamentos = response.departamentos;

      },
      error => {
        console.log("error", error);
      }
    )
  }

  mostrarDepartamento(departamentoId: string): void {
    this.router.navigate(['/departamento', departamentoId])
  }

}
