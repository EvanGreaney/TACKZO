import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import{ Storage } from '@ionic/storage';


@Component({
  selector: 'app-meal-choice',
  templateUrl: './meal-choice.page.html',
  styleUrls: ['./meal-choice.page.scss'],
})
export class MealChoicePage implements OnInit {

  
  constructor(public http: HttpClient,private router: Router,public storage:Storage) { }
  
  genRecipe :Array<any>;
   

  ngOnInit() {
    //genRecipe =this.storage.get("Recipe").then((genRecipe)=>{};
    //console.log("Saved Recipe",this.genRecipe);
    console.log("Saved Recipe in Storage: ",this.storage.get("Recipe"));
    
  }

}
