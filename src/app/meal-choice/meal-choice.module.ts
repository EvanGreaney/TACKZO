import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MealChoicePageRoutingModule } from './meal-choice-routing.module';

import { MealChoicePage } from './meal-choice.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MealChoicePageRoutingModule
  ],
  declarations: [MealChoicePage]
})
export class MealChoicePageModule {}
