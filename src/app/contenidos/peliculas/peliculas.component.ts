import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {

  peliculas = [
    {id: 1, name:'Avengers ENDGAME',descripcion:'película de superhéroes basada en el equipo de superhéroes de Marvel Comics del mismo nombre. Se trata de la secuela de The Avengers, Avengers: Age of Ultron y Avengers: Infinity War, y un cruce-secuela entre Ant-Man and the Wasp y Captain Marvel.', imagen:"Avengers.jpg"},
    {id: 2, name:'Guardianes de la Galaxia',descripcion:'En Guardianes de la Galaxia, Peter Quill forma una alianza incómoda con un grupo de delincuentes extraterrestres que intentan escapar después de robar un poderoso artefacto', imagen:"guardianes.jpg"},
    {id: 3, name:'Doctor Strange',descripcion:'Doctor Strange sirve como el Hechicero Supremo, el principal protector de la Tierra contra las amenazas mágicas y místicas', imagen:"max.jpg"},
    {id: 4, name:'Flash',descripcion:'Flash (también conocido por su apodo "El Velocista Escarlata") es un superhéroe de DC Comics que posee una rapidez sobrehumana, la cual incluye la habilidad de correr a gran velocidad', imagen:"Flash.png"},
];
  constructor() { }

  ngOnInit(): void {
  }

}
