import { Component, OnInit,NgZone } from '@angular/core';
import { Router } from '@angular/router';
import{ Storage } from '@ionic/storage';
import { FoodService } from '../DataTransfers/food.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-search-food-type',
  templateUrl: './search-food-type.page.html',
  styleUrls: ['./search-food-type.page.scss'],
})
export class SearchFoodTypePage implements OnInit {
  public food:String;
  public foodRecipes: Array<any>;
  apiKey: String = "ccb5ae09cbc44169be9a30e8888e5e1d";
  public foodList: FormGroup;

  constructor(private router: Router,
    private storage:Storage, 
    public formBuilder: FormBuilder, 
    private foodApi: FoodService,
    private zone: NgZone,
    public http: HttpClient ) 
    { 
      this.foodList = formBuilder.group({
        food:[' ', Validators.required],
      });
    }

  ngOnInit() {
  }

  onFormSubmit(){

    this.food = this.foodList.value['food'];
    this.storage.set("food",this.food);

    console.log("food in On Form submit" + this.food);

    if(!this.foodList.valid)
    {
      console.log("Form empty")
      return false;
    }
    else
    {
        this.foodApi.addFood(this.foodList.value)
        .subscribe((res) => {
          this.zone.run(() => {
            console.log("All user input added to api")
            this.foodList.reset();
            //this.router.navigate(['meal-choice'])
          }
        )})
    }//else
    
    this.choice();
  }
  choice()
  {
   
    this.storage.set("newfood",this.food);
    console.log("foodChoice: ", this.food);

    this.getFood().subscribe(data =>{
      this.foodRecipes = data;
      console.log( this.foodRecipes);
      this.storage.set("Recipes",this.foodRecipes);
      console.log("food in choice: ",this.food);
      console.log(this.foodRecipes);
      console.log("Storage: ",this.storage.get("Recipes"));
    })
  }

  getFood():Observable<any>{
    this.storage.get("newfood").then((getFood)=>{
      console.log("Food chosen in GetFood(): ",getFood);
   });

    return this.http.get("https://api.spoonacular.com/recipes/search?query="+this.food+"&number=1&apiKey="+this.apiKey);
  }

}
