import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchIngredientsPage } from './search-ingredients.page';

const routes: Routes = [
  {
    path: '',
    component: SearchIngredientsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchIngredientsPageRoutingModule {}
