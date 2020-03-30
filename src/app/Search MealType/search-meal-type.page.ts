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

  constructor(private router: Router,private storage:Storage) { }

  ngOnInit() {
  }

  choice()
  {
    this.storage.set("mealType",this.mealType);
    this.router.navigate(['meal-choice'])
  }

}
