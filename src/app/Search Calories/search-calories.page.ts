import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{ Storage } from '@ionic/storage';
import {GetRecipeProvider} from '../Providers/GetRecipeByCal/GetRecipe';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-search-calories',
  templateUrl: './search-calories.page.html',
  styleUrls: ['./search-calories.page.scss'],
  providers: [GetRecipeProvider]
})
export class SearchCaloriesPage implements OnInit {
  noOfMeals: number;
  public maxCalories: number;
  noOfPeople:number;
  calBreakfast:number;
  calLunch:number;
  calDinner:number;
  public Recipes: Array<any>;
  //public RecipeStore: Array<String>;
  apiKey: String = "ccb5ae09cbc44169be9a30e8888e5e1d";


  constructor(public http: HttpClient,private router: Router,public storage:Storage) { }

  ngOnInit() {
  }

  choice()
  {
    this.storage.set("noOfMeals", this.noOfMeals);
    this.storage.set("maxNoOfCal", this.maxCalories);
    this.storage.set("noOfPeople", this.noOfPeople);
    this.storage.set("calBreakfast", this.calBreakfast);
    this.storage.set("calLunch", this.calLunch);
    this.storage.set("calDinner", this.calDinner);    
    //debugging the storage of user input
    console.log("number of meals: ", this.noOfMeals);
    console.log("Max number of calories per meal: ", this.maxCalories);
    console.log("number of people: ", this.noOfPeople);
    console.log("number of calories for breakfast: ", this.calBreakfast);
    console.log("number of calories for lunch: ", this.calLunch);
    console.log("number of calories for dinner: ", this.calDinner);
    //this.router.navigate(['meal-choice'])

    this.getRecipe().subscribe(data =>{
      this.Recipes = data;
      console.log( this.Recipes);
      //this.RecipeStore = JSON.stringify(this.Recipes);
      this.storage.set("Recipes",this.Recipes);
    })
    //console.log( this.RecipeStore);
  }

  getRecipe():Observable<any>{
    this.storage.get("maxNoOfCal").then((getCalories)=>{
       console.log("Max Number of calories",getCalories);
    });
    return this.http.get("https://api.spoonacular.com/recipes/findByNutrients?maxCalories="+this.maxCalories+"&number=1&apiKey="+this.apiKey)
      
  }

  searchRecipes()
  {
    console.log(this.maxCalories);
    console.log(this.Recipes);
    console.log("Storage: ",this.storage.get("Recipes"));
  }

  
  
}
