import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobViewMoreComponent } from './job-view-more.component';

describe('JobViewMoreComponent', () => {
  let component: JobViewMoreComponent;
  let fixture: ComponentFixture<JobViewMoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobViewMoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobViewMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
