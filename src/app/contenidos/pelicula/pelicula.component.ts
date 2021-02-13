import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliculasService } from 'src/app/servicios/peliculas.service';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css'],  
  providers: [PeliculasService]

})
export class PeliculaComponent implements OnInit {
  id: number;
  pelicula: any; 
  constructor(private router: ActivatedRoute,
    private peliculasSevice: PeliculasService) { }

  ngOnInit(): void {
    this.router.params.subscribe(params => {
      this.id = params.id;
      this.pelicula = this.peliculasSevice.peliculas[this.id-1];
    })
  }

}
