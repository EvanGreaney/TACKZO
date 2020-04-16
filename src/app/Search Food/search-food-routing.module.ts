import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchFoodTypePage } from './search-food-type.page';

const routes: Routes = [
  {
    path: '',
    component: SearchFoodTypePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchFoodTypePageRoutingModule {}
