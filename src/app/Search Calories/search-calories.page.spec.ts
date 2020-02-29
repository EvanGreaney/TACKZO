import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SearchCaloriesPage } from './search-calories.page';

describe('SearchCaloriesPage', () => {
  let component: SearchCaloriesPage;
  let fixture: ComponentFixture<SearchCaloriesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchCaloriesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SearchCaloriesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
