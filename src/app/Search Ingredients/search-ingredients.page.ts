import { Component, OnInit,NgZone } from '@angular/core';
import { Router } from '@angular/router';
import{ Storage } from '@ionic/storage';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { IngredientsService } from '../DataTransfers/ingredients.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-search-ingredients',
  templateUrl: './search-ingredients.page.html',
  styleUrls: ['./search-ingredients.page.scss'],
})
export class SearchIngredientsPage implements OnInit {

  
  public ingredients: String;
  public ingredientsList: FormGroup;
  
  //API Stuff
  public Recipes: Array<any>;
  apiKey: String = "ccb5ae09cbc44169be9a30e8888e5e1d";



  constructor(private router: Router,
     private storage:Storage, 
     public formBuilder: FormBuilder, 
     private ingredientsApi: IngredientsService,
     private zone: NgZone,
     public http: HttpClient )
  { 
      this.ingredientsList = formBuilder.group({

      ingredients:['', Validators.required]
     

    

    });
  }

  ngOnInit() {
  }


onFormSubmit(){
  this.ingredients = this.ingredientsList.value['ingredients'];
    this.storage.set("ingredients",this.ingredients);

    console.log("Ingredients in On Form submit" + this.ingredients);
  

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

    this.choice();
}
  choice() {
    this.storage.set("ingredientsList", this.ingredients);
    //debugging the storage of user input
    console.log("Ingredients of meal: ", this.ingredients);

    this.getRecipe().subscribe(data =>{
      this.Recipes = data;
      console.log( this.Recipes);
      this.storage.set("ingredients",this.Recipes);
      console.log("ingredients in form: ",this.ingredients);
      console.log(this.Recipes);
      console.log("Storage: ",this.storage.get("ingredients"));
    })

    console.log("contents of API ",this.getRecipe());
  }
  getRecipe():Observable<any> {
    this.storage.get("ingredientsList").then((getIngredients)=>{
      console.log("Ingredients on GetRecipe",getIngredients);
   });
   return this.http.get("https://api.spoonacular.com/recipes/findByIngredients?ingredients="+this.ingredients+"&number=1&apiKey="+this.apiKey)
  }
  

} 
