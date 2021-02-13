import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './contenidos/error/error.component';
import { InicioComponent } from './contenidos/inicio/inicio.component';
import { PeliculaComponent } from './contenidos/pelicula/pelicula.component';
import {PeliculasComponent} from './contenidos/peliculas/peliculas.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'inicio', component: InicioComponent },
  { path: 'peliculas', component: PeliculasComponent },
  { path: 'pelicula/:id', component: PeliculaComponent},
  { path: '**', component: ErrorComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }