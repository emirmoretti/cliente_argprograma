import { Component, OnInit } from '@angular/core';
import { Education } from 'src/app/models/education';
import { Skills } from 'src/app/models/skills';
import { EducationService } from 'src/app/services/education.service';
import { SkillsService } from 'src/app/services/skills.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public educationList: Education[] = [];

  public skillsList: Skills[] = [];

  constructor(
    private educationService: EducationService,
    private skillService: SkillsService
  ) { }

  ngOnInit(): void {
    this.getEducationList();
    this.getSkillsList();
  }

  public getSkillsList(): void {
    this.skillService.getSkills().subscribe({
      next: (response: Skills[]) => {
        if (response) {
          this.skillsList = response
        }
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

  public getEducationList(): void {
    this.educationService.getEducation().subscribe({
      next: (response: Education[]) => {
        if (response) this.educationList = response;
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

}
