import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experience } from 'src/app/models/experience';
import { ExperienceService } from 'src/app/services/experience.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-experience-form',
  templateUrl: './experience-form.component.html',
  styleUrls: ['./experience-form.component.scss']
})
export class ExperienceFormComponent implements OnInit {

  experience: Experience = new Experience();

  constructor(
    private experienceService: ExperienceService, 
    private activatedRoute: ActivatedRoute,
    private router: Router,
    ) { }

  ngOnInit(): void {
    this.loadExp();
  }

  public loadExp(): void {
    this.activatedRoute.params.subscribe(params => {
      let id = params['id']
      if (id) {
        this.experienceService.getExperienceId(id).subscribe({
          next: (response: Experience) => {
            this.experience = response;
          }
        })
      }
    })
  }

  public addExp(): void {
    this.experienceService.createExperience(this.experience).subscribe({
      next: response => {
        this.router.navigate(['experience'])
        Swal.fire('Nueva exp añadida', `Experiencia creada con exito ${response.name}`, 'success')
      }
    });
  }

  public updateExp(): void {
    this.experienceService.updateExperience(this.experience).subscribe({
      next: response => {
        this.router.navigate(['experience'])
        Swal.fire('Experiencia Actualizada', `Experiencia ${response.name}`, 'success')
      }
    })
  }

}
