import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-boton-nuevo',
  standalone: true,
  imports: [],
  templateUrl: './boton-nuevo.component.html',
  styleUrl: './boton-nuevo.component.css'
})
export class BotonNuevoComponent {

  menuHidden: boolean = true

  constructor ( private router: Router ) {}

  nuevoEmpleado(): void {
    this.router.navigate([`/nuevo-empleado`]);
  }
  
  nuevoDepartamento(): void {
    this.router.navigate([`/nuevo-departamento`]);
  }

  mostrar(): void {
    this.menuHidden = !this.menuHidden
  }

}