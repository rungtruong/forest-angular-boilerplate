import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CropDashboardComponent } from './crop-dashboard.component';

describe('CropDashboardComponent', () => {
  let component: CropDashboardComponent;
  let fixture: ComponentFixture<CropDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CropDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CropDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
