import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SearchCaloriesPage } from "src/app/Search Calories/search-calories.page";

//New Addition

@Injectable()
export class GetRecipeProvider {

    getCalories: number
    constructor(public http: HttpClient, SearchCalories: SearchCaloriesPage) {
        console.log('Hello GetRecipe Provider');
    this.getCalories = SearchCalories.maxCalories;      }

      getRecipe():Observable<any>{
          return this.http.get("https://api.spoonacular.com/recipes/findByNutrients?maxCalories="+this.getCalories+"&number=1&apiKey=0f0c3501db7b43ca834607cb3a2d9d88")
      }
}