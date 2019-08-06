import { Injectable } from '@angular/core';
import { Recipe } from './receta.model';

@Injectable({
  providedIn: 'root'
})
export class RecetasService {

  constructor() { }

  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Schnitzel',
      // tslint:disable-next-line: max-line-length
      urlImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Breitenlesau_Krug_Br%C3%A4u_Schnitzel.JPG/800px-Breitenlesau_Krug_Br%C3%A4u_Schnitzel.JPG',
      ingredients: ['Papas fritas', 'Carne de chancho', 'Ensalada']
    },
    {
      id: 'r2',
      title: 'Spaghetti',
      urlImage: 'https://upload.wikimedia.org/wikipedia/commons/1/13/Spaghetti_carbonara_-_Trishhhh.jpg',
      ingredients: ['Fideos', 'Carne de chancho', 'Tomates']
    },
  ];

  obtenerRecetas() {
    return [...this.recipes];
  }

  obtenerReceta(recetaId: string) {
    return {
      ...this.recipes.find(recipe =>
         recipe.id === recetaId
      )
    };
  }

  eliminarReceta(recetaId: string) {
    this.recipes = this.recipes.filter(recipe => {
      return recipe.id !== recetaId;
    });
  }
}
