import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostExperienceComponent } from './post-experience.component';

describe('PostExperienceComponent', () => {
  let component: PostExperienceComponent;
  let fixture: ComponentFixture<PostExperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostExperienceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
