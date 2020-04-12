import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{ Storage } from '@ionic/storage';
import {GetRecipeProvider} from 'Providers/GetRecipebyCal/GetRecipe';

@Component({
  selector: 'app-search-calories',
  templateUrl: './search-calories.page.html',
  styleUrls: ['./search-calories.page.scss'],
  providers: [GetRecipeProvider]
})
export class SearchCaloriesPage implements OnInit {
  noOfMeals: number;
  maxCalories: number;
  noOfPeople:number;
  calBreakfast:number;
  calLunch:number;
  calDinner:number;
  Recipes: any[] = [];


  constructor(private router: Router,private storage:Storage/*,private getRecipe: GetRecipeProvider*/) { }

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
    this.router.navigate(['meal-choice'])
/*
    this.getRecipe.getRecipe().subscribe(data =>{
      this.Recipes = data.Recipes;
    })*/
  }

  
}
