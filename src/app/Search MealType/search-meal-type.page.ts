import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{ Storage } from '@ionic/storage';

@Component({
  selector: 'app-search-meal-type',
  templateUrl: './search-meal-type.page.html',
  styleUrls: ['./search-meal-type.page.scss'],
})
export class SearchMealTypePage implements OnInit {
  mealType:String;
  servings:number;

  constructor(private router: Router,private storage:Storage) { }

  ngOnInit() {
  }

  choice()
  {
    this.router.navigate(['meal-choice'])
    this.storage.set("mealType",this.mealType);
    console.log("meal: ", this.mealType);
    console.log("servings: ", this.servings);
  }

}
