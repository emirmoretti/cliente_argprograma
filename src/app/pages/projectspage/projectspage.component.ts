import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project';
import { Skills } from 'src/app/models/skills';
import { ProjectsService } from 'src/app/services/projects.service';
import { SkillsService } from 'src/app/services/skills.service';

@Component({
  selector: 'app-projectspage',
  templateUrl: './projectspage.component.html',
  styleUrls: ['./projectspage.component.scss']
})
export class ProjectspageComponent implements OnInit {

  public projectList: Project[] = [];

  public skillsList: Skills[] = [];

  constructor(private projectService: ProjectsService, private skillService: SkillsService) { }

  ngOnInit(): void {
    this.getProjectList();
    this.getSkillsList();
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

}
