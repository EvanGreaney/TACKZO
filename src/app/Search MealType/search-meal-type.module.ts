import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchMealTypePageRoutingModule } from './search-meal-type-routing.module';

import { SearchMealTypePage } from './search-meal-type.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchMealTypePageRoutingModule
  ],
  declarations: [SearchMealTypePage]
})
export class SearchMealTypePageModule {}
