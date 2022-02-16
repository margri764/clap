import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSchoolProposalComponent } from './card-school-proposal.component';

describe('CardSchoolProposalComponent', () => {
  let component: CardSchoolProposalComponent;
  let fixture: ComponentFixture<CardSchoolProposalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardSchoolProposalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardSchoolProposalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
