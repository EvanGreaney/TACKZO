import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SearchMealTypePage } from './search-meal-type.page';

describe('SearchMealTypePage', () => {
  let component: SearchMealTypePage;
  let fixture: ComponentFixture<SearchMealTypePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchMealTypePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SearchMealTypePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
