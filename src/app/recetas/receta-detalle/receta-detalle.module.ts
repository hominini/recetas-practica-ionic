import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RecetaDetallePage } from './receta-detalle.page';

const routes: Routes = [
  {
    path: '',
    component: RecetaDetallePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RecetaDetallePage]
})
export class RecetaDetallePageModule {}
