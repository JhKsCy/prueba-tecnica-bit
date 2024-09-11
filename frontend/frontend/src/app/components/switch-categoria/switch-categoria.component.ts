import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-switch-categoria',
  standalone: true,
  imports: [],
  templateUrl: './switch-categoria.component.html',
  styleUrl: './switch-categoria.component.css'
})
export class SwitchCategoriaComponent {

  menuHidden: boolean = true
  
  constructor ( private router: Router ) {}

  mostrar(): void {
    this.menuHidden = !this.menuHidden
    if(this.menuHidden) {
      this.router.navigate(['/empleados'])
    } 
    else {
      this.router.navigate(['/departamentos'])
    }
  }

  volver(): void {
    if(this.menuHidden) {
      this.router.navigate(['/empleados'])
    } 
    else {
      this.router.navigate(['/departamentos'])
    }
  }

}
