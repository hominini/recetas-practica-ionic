import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecetasService } from '../recetas.service';
import { Receta } from '../receta.model';

@Component({
  selector: 'app-receta-detalle',
  templateUrl: './receta-detalle.page.html',
  styleUrls: ['./receta-detalle.page.scss'],
})
export class RecetaDetallePage implements OnInit {

  recetaCargada: Receta;
  constructor(
    private activatedRoute: ActivatedRoute,
    private recetasService: RecetasService,
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('idReceta')) {
        //redirect
        return;
      }

      const idReceta = paramMap.get('idReceta');
      this.recetaCargada = this.recetasService.obtenerReceta(idReceta);
    });
  }

}
