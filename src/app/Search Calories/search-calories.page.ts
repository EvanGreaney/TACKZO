import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
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
  public noOfMeals: number;
  public maxCalories: number;
  public noOfPeople:number;
  public calBreakfast:number;
  public calLunch:number;
  public calDinner:number;
  //API Stuff
  public Recipes: Array<any>;
  apiKey: String = "ccb5ae09cbc44169be9a30e8888e5e1d";
  public caloriesList: FormGroup;


  constructor(private router: Router,
    public storage:Storage,
    private caloriesApi: CaloriesService,
    public formBuilder: FormBuilder, 
    private zone: NgZone,
    public http: HttpClient ) 
    { 
      this.caloriesList = formBuilder.group({
        noOfMeals: [' ', Validators.required],
        maxCalories: [' ', Validators.required],
        noOfPeople:[' ', Validators.required],
        calBreakfast:[' '],
        calLunch:[' '],
        calDinner:[' ']
      });
    }

  ngOnInit() {
  }

  choice()
  {
    this.storage.set("noOfMeals", this.noOfMeals);
    this.storage.set("maxNoOfCal", this.maxCalories);
    this.storage.set("noOfPeople", this.noOfPeople);
    this.storage.set("calBreakfast", this.calBreakfast);
    this.storage.set("calLunch", this.calLunch);
    this.storage.set("calDinner", this.calDinner);    
    //debugging the storage of user input
    console.log("number of meals: ", this.noOfMeals);
    console.log("Max number of calories per meal: ", this.maxCalories);
    console.log("number of people: ", this.noOfPeople);
    console.log("number of calories for breakfast: ", this.calBreakfast);
    console.log("number of calories for lunch: ", this.calLunch);
    console.log("number of calories for dinner: ", this.calDinner);

    this.getRecipe().subscribe(data =>{
      this.Recipes = data;
      console.log( this.Recipes);
      this.storage.set("Recipes",this.Recipes);
      console.log("maxCalories: ",this.maxCalories);
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
  
  onFormSubmit(){
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
  }
}
