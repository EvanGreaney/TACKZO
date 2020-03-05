import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MealChoicePage } from './meal-choice.page';

describe('MealChoicePage', () => {
  let component: MealChoicePage;
  let fixture: ComponentFixture<MealChoicePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MealChoicePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MealChoicePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
