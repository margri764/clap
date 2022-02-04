import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardJobProposalComponent } from './card-job-proposal.component';

describe('CardJobProposalComponent', () => {
  let component: CardJobProposalComponent;
  let fixture: ComponentFixture<CardJobProposalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardJobProposalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardJobProposalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
