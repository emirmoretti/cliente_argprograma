import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationpageComponent } from './educationpage.component';

describe('EducationpageComponent', () => {
  let component: EducationpageComponent;
  let fixture: ComponentFixture<EducationpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducationpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EducationpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
