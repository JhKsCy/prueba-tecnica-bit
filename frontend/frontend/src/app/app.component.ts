import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardEmpleadoComponent } from './components/card-empleado/card-empleado.component';
import { CardDepartamentoComponent } from './components/card-departamento/card-departamento.component';
import { SwitchCategoriaComponent } from './components/switch-categoria/switch-categoria.component';
import { BotonNuevoComponent } from './components/boton-nuevo/boton-nuevo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SwitchCategoriaComponent, BotonNuevoComponent, CardEmpleadoComponent, CardDepartamentoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
}
