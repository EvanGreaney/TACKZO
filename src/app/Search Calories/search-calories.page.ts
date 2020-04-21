import { Component, OnInit, NgZone } from '@angular/core';
import{ Storage } from '@ionic/storage';
import { CaloriesService } from '../DataTransfers/calories.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-search-calories',
  templateUrl: './search-calories.page.html',
  styleUrls: ['./search-calories.page.scss'],
})
export class SearchCaloriesPage implements OnInit {
  public maxCalories: number;
  //API Stuff
  public Recipes: Array<any>;
  apiKey: String = "ccb5ae09cbc44169be9a30e8888e5e1d";
  public caloriesList: FormGroup;

  constructor(
    public storage:Storage,
    private caloriesApi: CaloriesService,
    public formBuilder: FormBuilder, 
    private zone: NgZone,
    public http: HttpClient ) 
    { 
      this.caloriesList = formBuilder.group({
        maxCalories: [' ', Validators.required],
      });
    }

  ngOnInit() {
  }
  onFormSubmit(){
    
    this.maxCalories = this.caloriesList.value['maxCalories'];
    this.storage.set("maxCalories",this.maxCalories);

    console.log("max Calories in On Form submit" + this.maxCalories);
    //sending the input to the database
    if(!this.caloriesList.valid)
    {
      console.log("Form empty")
      return false;
    }
    else
    {
        this.caloriesApi.addCalories(this.caloriesList.value)
        .subscribe((res) => {
          this.zone.run(() => {
            console.log("All user input added to api")
            this.caloriesList.reset();
          }
        )})
    }//else

    this.choice();
  }

  choice()
  {
    this.storage.set("maxNoOfCal", this.maxCalories);
    //debugging the storage of user input
    console.log("Max number of calories per meal: ", this.maxCalories);

    this.getRecipe().subscribe(data =>{
      this.Recipes = data;
      console.log( this.Recipes);
      this.storage.set("Recipes",this.Recipes);
      console.log("maxCalories in form: ",this.maxCalories);
      console.log(this.Recipes);
      console.log("Storage: ",this.storage.get("Recipes"));
    })
  }
  //API Stuff
  getRecipe():Observable<any>{
    this.storage.get("maxNoOfCal").then((getCalories)=>{
       console.log("Max Number of calories",getCalories);
    });
    return this.http.get("https://api.spoonacular.com/recipes/findByNutrients?maxCalories="+this.maxCalories+"&number=1&apiKey="+this.apiKey)
      
  }
  //API Stuff
  searchRecipes()
  {
    console.log(this.maxCalories);
    console.log(this.Recipes);
    console.log("Storage: ",this.storage.get("Recipes"));
  }
  
  
}
