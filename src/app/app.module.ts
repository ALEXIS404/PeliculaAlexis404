import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MenusuperiorComponent } from './estructura/menusuperior/menusuperior.component';
import { InicioComponent } from './contenidos/inicio/inicio.component';
import { PeliculasComponent } from './contenidos/peliculas/peliculas.component';
import { ErrorComponent } from './contenidos/error/error.component';
import { PeliculaComponent } from './contenidos/pelicula/pelicula.component';

@NgModule({
  declarations: [
    AppComponent,
    MenusuperiorComponent,
    InicioComponent,
    PeliculasComponent,
    ErrorComponent,
    PeliculaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
