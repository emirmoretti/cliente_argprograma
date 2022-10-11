import { Component, OnInit } from '@angular/core';
import { Education } from 'src/app/models/education';
import { Project } from 'src/app/models/project';
import { Skills } from 'src/app/models/skills';
import { EducationService } from 'src/app/services/education.service';
import { ProjectsService } from 'src/app/services/projects.service';
import { SkillsService } from 'src/app/services/skills.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public educationList: Education[] = [];

  public skillsList: Skills[] = [];

  public projectList: Project[] = [];

  constructor(
    private educationService: EducationService,
    private skillService: SkillsService,
    private projectService: ProjectsService
  ) { }

  ngOnInit(): void {
    this.getEducationList();
    this.getSkillsList();
    this.getProjectList();
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

  public getProjectList(): void {
    this.projectService.getProjects().subscribe({
      next: (resp: Project[]) => {
        if (resp) this.projectList = resp;
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

}
