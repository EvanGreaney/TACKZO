import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(private router: Router) {}

  calories()
  {
    this.router.navigate(['search-calories'])
  }
  food()
  {
    this.router.navigate(['search-food'])
  }
  ingredients()
  {
    this.router.navigate(['search-ingredients'])
  }
}
