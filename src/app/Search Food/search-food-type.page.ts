import { Component, OnInit,NgZone } from '@angular/core';
import { Router } from '@angular/router';
import{ Storage } from '@ionic/storage';
import { FoodService } from '../DataTransfers/food.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-search-food-type',
  templateUrl: './search-food-type.page.html',
  styleUrls: ['./search-food-type.page.scss'],
})
export class SearchFoodTypePage implements OnInit {
  public food:String;
  public foodList: FormGroup;

  constructor(private router: Router,
    private storage:Storage, 
    public formBuilder: FormBuilder, 
    private foodApi: FoodService,
    private zone: NgZone ) 
    { 
      this.foodList = formBuilder.group({
        food:[' ', Validators.required],
      });
    }

  ngOnInit() {
  }

  onFormSubmit(){
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
            this.router.navigate(['meal-choice'])
          }
        )})
    }//else
    
  }
  choice()
  {
   
    this.storage.set("food",this.food);
    console.log("foodChoice: ", this.food);
  }

}
