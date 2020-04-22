import { Component} from '@angular/core';
import { IngredientsService } from '../DataTransfers/ingredients.service';
import { FoodService } from '../DataTransfers/food.service';
import { CaloriesService } from '../DataTransfers/calories.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  public ingredientsData:Array<any>;
  public caloriesData:Array<any>;
  public foodData:Array<any>;
  

  constructor(private ingredientsApi: IngredientsService,
    private foodApi: FoodService,
    private caloriesApi: CaloriesService,
    public http: HttpClient) {}

  searchFood()
  {
    this.foodApi.getFoodList()
    .subscribe((fdata) => {
      console.log(fdata)
     //this.foodData = fdata;
    });
  }

  searchCalories()
  {
    this.caloriesApi.getCaloriesList()
    .subscribe((calorData) => {
      console.log(calorData)
      this.caloriesData = calorData;
    });
  }

  searchIngredients()
  {
    this.ingredientsApi.getIngredientsList()
    .subscribe((ingedDat) => {
      console.log(ingedDat)
      this.ingredientsData = ingedDat;
  });
}

}
