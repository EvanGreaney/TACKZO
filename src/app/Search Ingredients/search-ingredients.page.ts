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
  public ingredients: Array<String>;
  public ingredientsList: FormGroup;
  private ingredientNo: number = 1;
  public servings: number;

  constructor(private router: Router,
     private storage:Storage, 
     public formBuilder: FormBuilder, 
     private ingredientsApi: IngredientsService,
     private zone: NgZone )
  { 
      this.ingredientsList = formBuilder.group({
      ingredients: ['', Validators.required],
      servings: [' ']
    });
  }

  ngOnInit() {
  }

  addIngredient(){
    this.ingredientNo++;
    this.ingredientsList.addControl('ingredient' + this.ingredientNo, new FormControl('', Validators.required));
    this.add();
  }
  add()
  {
     this.storage.set('ingredients',this.ingredients)
        .then(
          () => {
            console.log('ingredient added: ' ,this.ingredients);
          },
          error => console.error('Error storing ingredients', error)
        );
      this.storage.set('servings', this.servings)
      .then(
        () => {
          console.log('Number of servings: ' , this.servings);
        },
        error => console.error('Error storing item', error)
      );
  }//add
  
onFormSubmit(){
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
            this.router.navigate(['meal-choice'])
          }
        )})
    }//else
}
  

} 
