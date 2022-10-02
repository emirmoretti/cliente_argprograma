import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSkillsComponent } from './form-skills.component';

describe('FormSkillsComponent', () => {
  let component: FormSkillsComponent;
  let fixture: ComponentFixture<FormSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormSkillsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
