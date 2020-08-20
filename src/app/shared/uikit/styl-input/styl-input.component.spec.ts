import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StylInputComponent } from './styl-input.component';

describe('StylInputComponent', () => {
  let component: StylInputComponent;
  let fixture: ComponentFixture<StylInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StylInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StylInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
