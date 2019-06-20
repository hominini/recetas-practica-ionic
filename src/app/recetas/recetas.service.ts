import { Injectable } from '@angular/core';
import { Receta } from './receta.model';

@Injectable({
  providedIn: 'root'
})
export class RecetasService {

  constructor() { }

  private recetas: Receta[] = [
    {
      id: 'r1',
      titulo: 'Schnitzel',
      // tslint:disable-next-line: max-line-length
      urlImagen: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Breitenlesau_Krug_Br%C3%A4u_Schnitzel.JPG/800px-Breitenlesau_Krug_Br%C3%A4u_Schnitzel.JPG',
      ingredientes: ['Papas fritas', 'Carne de chancho', 'Ensalada']
    },
    {
      id: 'r2',
      titulo: 'Spaghetti',
      urlImagen: 'https://upload.wikimedia.org/wikipedia/commons/1/13/Spaghetti_carbonara_-_Trishhhh.jpg',
      ingredientes: ['Fideos', 'Carne de chancho', 'Tomates']
    },
  ];

  obtenerRecetas() {
    return [...this.recetas];
  }

  obtenerReceta(recetaId: string) {
    return {
      ...this.recetas.find(receta => {
        return receta.id === recetaId;
      })
    };
  }
}
