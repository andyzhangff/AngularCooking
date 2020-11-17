import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepRemoveComponent } from './step-remove.component';

describe('StepRemoveComponent', () => {
  let component: StepRemoveComponent;
  let fixture: ComponentFixture<StepRemoveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepRemoveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepRemoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
