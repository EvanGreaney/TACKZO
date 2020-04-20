import { Component, OnInit,NgZone } from '@angular/core';
import { Router } from '@angular/router';
import{ Storage } from '@ionic/storage';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { IngredientsService } from '../DataTransfers/ingredients.service';

@Component({
  selector: 'app-search-ingredients',
  templateUrl: './search-ingredients.page.html',
  styleUrls: ['./search-ingredients.page.scss'],
})
export class SearchIngredientsPage implements OnInit {
  public ingredient1: String;
  public ingredient2: String;
  public ingredient3: String;
  public ingredient4: String;
  public ingredient5: String;
  public ingredientsList: FormGroup;

  constructor(private router: Router,
     private storage:Storage, 
     public formBuilder: FormBuilder, 
     private ingredientsApi: IngredientsService,
     private zone: NgZone )
  { 
      this.ingredientsList = formBuilder.group({
      ingredient1:[' ', Validators.required],
      ingredient2:[' '],
      ingredient3:[' '],
      ingredient4:[' '],
      ingredient5:[' '],
    });
  }

  ngOnInit() {
  }
  
onFormSubmit(){
  //add form input to local storage
  this.ingredient1 = this.ingredientsList.value['ingredient1'];
  this.storage.set("ingredient1",this.ingredient1);
  this.ingredient2 = this.ingredientsList.value['ingredient2'];
  this.storage.set("ingredient2",this.ingredient2);
  this.ingredient3 = this.ingredientsList.value['ingredient3'];
  this.storage.set("ingredient3",this.ingredient3);
  this.ingredient4 = this.ingredientsList.value['ingredient4'];
  this.storage.set("ingredient4",this.ingredient4);
  this.ingredient5 = this.ingredientsList.value['ingredient5'];
  this.storage.set("ingredient5",this.ingredient5);

  console.log("Ingredients Added " + this.ingredient1 + " " + this.ingredient2 + " " + this.ingredient3 + " " + this.ingredient4 + " " + this.ingredient5);
  if(!this.ingredientsList.valid)
    {
      console.log("Form empty")
      return false;
    }
    else
    {
        this.ingredientsApi.addIngredients(this.ingredientsList.value)
        .subscribe((res) => {
          this.zone.run(() => {
            console.log("Ingredient added to api")
            this.ingredientsList.reset();
          }
        )})
    }//else
}
  

} 
