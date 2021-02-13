import { Component, OnInit } from '@angular/core';
import { PeliculasService } from 'src/app/servicios/peliculas.service';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css'],
  providers: [PeliculasService]
})
export class PeliculasComponent implements OnInit {
   peliculas: any;
  constructor(private peliculasService:PeliculasService) {
      this.peliculas = this.peliculasService.peliculas;
     }

  ngOnInit(): void {
  }

}
