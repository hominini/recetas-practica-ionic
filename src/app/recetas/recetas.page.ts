import { Component, OnInit } from '@angular/core';
import { Receta } from './receta.model';
import { RecetasService } from './recetas.service';

@Component({
  selector: 'app-recetas',
  templateUrl: './recetas.page.html',
  styleUrls: ['./recetas.page.scss'],
})
export class RecetasPage implements OnInit {

 recetas: Receta[];

  constructor(private recetasServicio: RecetasService) {}

  ngOnInit() {
    this.recetas = this.recetasServicio.obtenerRecetas();
  }

}
