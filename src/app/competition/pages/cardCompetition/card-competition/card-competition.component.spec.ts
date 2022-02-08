import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCompetitionComponent } from './card-competition.component';

describe('CardCompetitionComponent', () => {
  let component: CardCompetitionComponent;
  let fixture: ComponentFixture<CardCompetitionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardCompetitionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardCompetitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
