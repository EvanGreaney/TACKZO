import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MealChoicePage } from './meal-choice.page';

const routes: Routes = [
  {
    path: '',
    component: MealChoicePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MealChoicePageRoutingModule {}
