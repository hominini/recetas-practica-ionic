import { Component, OnInit } from '@angular/core';
import { Recipe } from './receta.model';
import { RecetasService } from './recetas.service';

@Component({
  selector: 'app-recetas',
  templateUrl: './recetas.page.html',
  styleUrls: ['./recetas.page.scss'],
})
export class RecetasPage implements OnInit {

  recipes: Recipe[];

  constructor(private recetasServicio: RecetasService) {}

  ngOnInit() {
    this.recipes = this.recetasServicio.obtenerRecetas();
  }

}
