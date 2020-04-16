import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchFoodTypePageRoutingModule } from './search-food-routing.module';

import { SearchFoodTypePage } from './search-food-type.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    SearchFoodTypePageRoutingModule
  ],
  declarations: [SearchFoodTypePage]
})
export class SearchFoodTypePageModule {}
