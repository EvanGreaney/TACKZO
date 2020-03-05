import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{ Storage } from '@ionic/storage';

@Component({
  selector: 'app-search-ingredients',
  templateUrl: './search-ingredients.page.html',
  styleUrls: ['./search-ingredients.page.scss'],
})
export class SearchIngredientsPage implements OnInit {
  noOfIngredients: number;
  ingredients: String[];

  constructor(private router: Router, private storage:Storage) { }

  ngOnInit() {
  }

  choice()
  {
    this.router.navigate(['meal-choice'])
  }
  send()
  {
    this.storage.set("noOfIngredients",this.noOfIngredients);
    console.log(this.noOfIngredients);
  }
}
