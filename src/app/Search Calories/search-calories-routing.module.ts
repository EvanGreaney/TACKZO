import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchCaloriesPage } from './search-calories.page';

const routes: Routes = [
  {
    path: '',
    component: SearchCaloriesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchCaloriesPageRoutingModule {}
