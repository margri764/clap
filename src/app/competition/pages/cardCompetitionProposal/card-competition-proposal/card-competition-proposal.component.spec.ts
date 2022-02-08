import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCompetitionProposalComponent } from './card-competition-proposal.component';

describe('CardCompetitionProposalComponent', () => {
  let component: CardCompetitionProposalComponent;
  let fixture: ComponentFixture<CardCompetitionProposalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardCompetitionProposalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardCompetitionProposalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
