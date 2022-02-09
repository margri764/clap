import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagSchoolComponent } from './tag-school.component';

describe('TagSchoolComponent', () => {
  let component: TagSchoolComponent;
  let fixture: ComponentFixture<TagSchoolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TagSchoolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TagSchoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
