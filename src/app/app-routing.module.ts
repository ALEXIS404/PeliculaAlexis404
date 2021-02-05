import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './contenidos/inicio/inicio.component';
import {PeliculasComponent} from './contenidos/peliculas/peliculas.component';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'peliculas', component: PeliculasComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }