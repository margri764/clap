import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePeoplesComponent } from './home-peoples.component';

describe('HomePeoplesComponent', () => {
  let component: HomePeoplesComponent;
  let fixture: ComponentFixture<HomePeoplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePeoplesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePeoplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
