import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Storage } from '@ionic/storage';

//New Addition
@Injectable()
export class GetRecipeProvider {

    getCalories: number;
    apiKey: String = "ccb5ae09cbc44169be9a30e8888e5e1d";
    constructor(public http: HttpClient ,public storage: Storage) {
        console.log('Hello GetRecipe Provider');
      }
      
        //storage.get("maxNoOfCal").then((getCalories)=>{
       // console.log("Max Number of calories",getCalories);
      // });

      getRecipe():Observable<any>{
          this.storage.get("maxNoOfCal").then((getCalories)=>{
             console.log("Max Number of calories",getCalories);
          });
          return this.http.get("https://api.spoonacular.com/recipes/findByNutrients?maxCalories="+this.getCalories+"&number=1&apiKey="+this.apiKey)
            
        }
}