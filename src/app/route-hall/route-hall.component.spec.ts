import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteHallComponent } from './route-hall.component';

describe('RouteHallComponent', () => {
  let component: RouteHallComponent;
  let fixture: ComponentFixture<RouteHallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouteHallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteHallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
