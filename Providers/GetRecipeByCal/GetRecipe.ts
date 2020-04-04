import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


//New Addition

@Injectable()
export class GetRecipeProvider {

    getCalories: number
    constructor(public http: HttpClient) {
        console.log('Hello GetRecipe Provider');
      }

      getRecipe():Observable<any>{
          return this.http.get("https://api.spoonacular.com/recipes/findByNutrients?maxCalories=800&number=1&apiKey=0f0c3501db7b43ca834607cb3a2d9d88")
      }
}