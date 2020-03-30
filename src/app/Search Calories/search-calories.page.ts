import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{ Storage } from '@ionic/storage';

@Component({
  selector: 'app-search-calories',
  templateUrl: './search-calories.page.html',
  styleUrls: ['./search-calories.page.scss'],
})
export class SearchCaloriesPage implements OnInit {
  noOfMeals: number;
  maxNoOfCal: number;
  noOfPeople:number;
  calBreakfast:number;
  calLunch:number;
  calDinner:number;


  constructor(private router: Router,private storage:Storage) { }

  ngOnInit() {
  }

  choice()
  {
    this.storage.set("noOfMeals", this.noOfMeals);
    this.storage.set("maxNoOfCal", this.maxNoOfCal);
    this.storage.set("noOfPeople", this.noOfPeople);
    this.storage.set("calBreakfast", this.calBreakfast);
    this.storage.set("calLunch", this.calLunch);
    this.storage.set("calDinner", this.calDinner);    
    this.router.navigate(['meal-choice'])
  }

  
}
