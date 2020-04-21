import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SearchFoodTypePage } from './search-food-type.page';

describe('SearchFoodTypePage', () => {
  let component: SearchFoodTypePage;
  let fixture: ComponentFixture<SearchFoodTypePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchFoodTypePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SearchFoodTypePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
