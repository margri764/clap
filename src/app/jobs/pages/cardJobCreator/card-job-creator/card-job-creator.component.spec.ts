import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardJobCreatorComponent } from './card-job-creator.component';

describe('CardJobCreatorComponent', () => {
  let component: CardJobCreatorComponent;
  let fixture: ComponentFixture<CardJobCreatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardJobCreatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardJobCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
