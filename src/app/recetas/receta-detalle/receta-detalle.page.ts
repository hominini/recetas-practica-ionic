import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecetasService } from '../recetas.service';
import { Recipe } from '../receta.model';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-receta-detalle',
  templateUrl: './receta-detalle.page.html',
  styleUrls: ['./receta-detalle.page.scss'],
})
export class RecetaDetallePage implements OnInit {

  recipe: Recipe;

  constructor(
    private activatedRoute: ActivatedRoute,
    private recetasService: RecetasService,
    private router: Router,
    private alertController: AlertController,
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('idReceta')) {
        // redirect
        this.router.navigate(['/recipes']);
        return;
      }

      const idReceta = paramMap.get('idReceta');
      this.recipe = this.recetasService.obtenerReceta(idReceta);
    });
  }

  onDeleteRecipe() {
    this.alertController.create({
      header: 'Estás seguro?',
      message: 'Realmente quieres eliminar ésta receta?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Delete',
          handler: () => {
            this.recetasService.eliminarReceta(this.recipe.id);
            this.router.navigate(['/recetas']);
          }
        }
      ],
    })
    .then(alertEl => {
      alertEl.present();
    });
  }
}
