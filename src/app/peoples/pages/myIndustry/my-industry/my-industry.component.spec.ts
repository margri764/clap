import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyIndustryComponent } from './my-industry.component';

describe('MyIndustryComponent', () => {
  let component: MyIndustryComponent;
  let fixture: ComponentFixture<MyIndustryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyIndustryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyIndustryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
