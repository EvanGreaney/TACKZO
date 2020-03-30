import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchIngredientsPageRoutingModule } from './search-ingredients-routing.module';

import { SearchIngredientsPage } from './search-ingredients.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    SearchIngredientsPageRoutingModule
  ],
  declarations: [SearchIngredientsPage]
})
export class SearchIngredientsPageModule {}
