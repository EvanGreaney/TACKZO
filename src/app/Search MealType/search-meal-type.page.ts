import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-meal-type',
  templateUrl: './search-meal-type.page.html',
  styleUrls: ['./search-meal-type.page.scss'],
})
export class SearchMealTypePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  choice()
  {
    this.router.navigate(['meal-choice'])
  }

}
