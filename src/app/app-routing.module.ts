import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'recetas', pathMatch: 'full' },
  { path: 'recetas',
    children: [
      {
        path: '',
        loadChildren: './recetas/recetas.module#RecetasPageModule',
      }
      ,
      {
        path: ':idReceta',
        loadChildren: './recetas/receta-detalle/receta-detalle.module#RecetaDetallePageModule'
      }
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
