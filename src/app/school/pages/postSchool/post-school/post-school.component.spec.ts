import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostSchoolComponent } from './post-school.component';

describe('PostSchoolComponent', () => {
  let component: PostSchoolComponent;
  let fixture: ComponentFixture<PostSchoolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostSchoolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostSchoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
