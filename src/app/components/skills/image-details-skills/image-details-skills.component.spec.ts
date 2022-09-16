import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageDetailsSkillsComponent } from './image-details-skills.component';

describe('ImageDetailsSkillsComponent', () => {
  let component: ImageDetailsSkillsComponent;
  let fixture: ComponentFixture<ImageDetailsSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageDetailsSkillsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageDetailsSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
