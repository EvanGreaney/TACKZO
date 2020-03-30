import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{ Storage } from '@ionic/storage';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-search-ingredients',
  templateUrl: './search-ingredients.page.html',
  styleUrls: ['./search-ingredients.page.scss'],
})
export class SearchIngredientsPage implements OnInit {
  public ingredients: Array<String>;
  public ingredientsList: FormGroup;
  private ingredientNo: number = 1;

  constructor(private router: Router, private storage:Storage, private formBuilder: FormBuilder) {
    this.ingredientsList = formBuilder.group({
      ingredient1: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  addIngredient(){
    this.ingredientNo++;
    this.ingredientsList.addControl('ingredient' + this.ingredientNo, new FormControl('', Validators.required));
    this.add();
  }
  removeIngredient(control){
    this.ingredientsList.removeControl(control.key);
  }
  choice()
  {
    this.router.navigate(['meal-choice'])
  }

  
  add()
  {
     this.storage.set('ingredients',this.ingredients)
        .then(
          () => {
            console.log('Ingredient Stored');
          },
          error => console.error('Error storing item', error)
        );

  }//add
  
} 
