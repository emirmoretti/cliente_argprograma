import { Component, OnInit } from '@angular/core';
import { Experience } from 'src/app/models/experience';
import { ExperienceService } from 'src/app/services/experience.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  experiencelist: Experience[] = [];

  constructor(private experienceService: ExperienceService) { }

  ngOnInit(): void {
    this.getAllExp()
  }

  public getAllExp(): void {
    this.experienceService.getAllExperiences().subscribe({
      next: (resp: Experience[]) => {
        this.experiencelist = resp;
      }
    })
  }

}
