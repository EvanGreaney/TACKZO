import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{ Storage } from '@ionic/storage';
import {GetRecipeProvider} from 'Providers/GetRecipebyCal/GetRecipe';

@Component({
  selector: 'app-search-calories',
  templateUrl: './search-calories.page.html',
  styleUrls: ['./search-calories.page.scss'],
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
    this.router.navigate(['meal-choice'])
/*
    this.getRecipe.getRecipe().subscribe(data =>{
      this.Recipes = data.Recipes;
    })*/
  }

  
}
