import { Routes } from '@angular/router';
import { NuevoEmpleadoComponent } from './components/nuevo-empleado/nuevo-empleado.component';
import { CardEmpleadoComponent } from './components/card-empleado/card-empleado.component';
import { EmpleadoComponent } from './components/empleado/empleado.component';
import { EditarEmpleadoComponent } from './components/editar-empleado/editar-empleado.component';
import { NuevoDepartamentoComponent } from './components/nuevo-departamento/nuevo-departamento.component';
import { CardDepartamentoComponent } from './components/card-departamento/card-departamento.component';
import { DepartamentoComponent } from './components/departamento/departamento.component';
import { EditarDepartamentoComponent } from './components/editar-departamento/editar-departamento.component';


export const routes: Routes = [

    { path: 'nuevo-empleado', title: `Nuevo empleado`, component: NuevoEmpleadoComponent },
    { path: 'empleados', title: `Empleados`, component: CardEmpleadoComponent },
    { path: 'empleado/:id', title: `Empleado`, component: EmpleadoComponent },
    { path: 'editar-empleado/:id', title: `Editar empleado`, component: EditarEmpleadoComponent },
    { path: 'nuevo-departamento', title: `Nuevo departamento`, component: NuevoDepartamentoComponent },
    { path: 'departamentos', title: `Departamentos`, component: CardDepartamentoComponent },
    { path: 'departamento/:id', title: `Departamento`, component: DepartamentoComponent },
    { path: 'editar-departamento/:id', title: `Editar departamento`, component: EditarDepartamentoComponent },
];
