import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowReceipeComponent } from './show-receipe.component';

describe('ShowReceipeComponent', () => {
  let component: ShowReceipeComponent;
  let fixture: ComponentFixture<ShowReceipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowReceipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowReceipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
