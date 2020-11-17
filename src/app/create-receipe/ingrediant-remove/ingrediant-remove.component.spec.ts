import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngrediantRemoveComponent } from './ingrediant-remove.component';

describe('IngrediantRemoveComponent', () => {
  let component: IngrediantRemoveComponent;
  let fixture: ComponentFixture<IngrediantRemoveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngrediantRemoveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngrediantRemoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
