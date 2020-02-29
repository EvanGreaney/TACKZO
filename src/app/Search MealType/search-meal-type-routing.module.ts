import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchMealTypePage } from './search-meal-type.page';

const routes: Routes = [
  {
    path: '',
    component: SearchMealTypePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchMealTypePageRoutingModule {}
