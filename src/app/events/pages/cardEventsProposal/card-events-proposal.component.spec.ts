import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardEventsProposalComponent } from './card-events-proposal.component';

describe('CardEventsProposalComponent', () => {
  let component: CardEventsProposalComponent;
  let fixture: ComponentFixture<CardEventsProposalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardEventsProposalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardEventsProposalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
