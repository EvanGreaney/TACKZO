import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'search-calories',
    loadChildren: () => import('./Search Calories/search-calories.module').then( m => m.SearchCaloriesPageModule)
  },
  {
    path: 'search-ingredients',
    loadChildren: () => import('./Search Ingredients/search-ingredients.module').then( m => m.SearchIngredientsPageModule)
  },
  {
    path: 'search-meal-type',
    loadChildren: () => import('./Search MealType/search-meal-type.module').then( m => m.SearchMealTypePageModule)
  },
  {
    path: 'meal-choice',
    loadChildren: () => import('./meal-choice/meal-choice.module').then( m => m.MealChoicePageModule)
  },
  {
    path: 'add-Ingredients',
    loadChildren: () => import('./Search Ingredients/search-ingredients.module').then( m => m.SearchIngredientsPageModule)
  }


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
