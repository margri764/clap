import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardBusinessProposalComponent } from './card-business-proposal.component';

describe('CardBusinessProposalComponent', () => {
  let component: CardBusinessProposalComponent;
  let fixture: ComponentFixture<CardBusinessProposalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardBusinessProposalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardBusinessProposalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
