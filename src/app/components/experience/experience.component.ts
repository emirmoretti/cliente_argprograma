import { Component, OnInit } from '@angular/core';
import { Experience } from 'src/app/models/experience';
import { ExperienceService } from 'src/app/services/experience.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  experienceList: Experience[] = [];

  constructor(private experienceService: ExperienceService) { }

  ngOnInit(): void {
    this.getAllExp()
  }

  public getAllExp(): void {
    this.experienceService.getAllExperiences().subscribe({
      next: (resp: Experience[]) => {
        this.experienceList = resp;
      }
    })
  }

  public deleteExp(experience: Experience): void {
    Swal.fire({
      title: 'Estás seguro pa?',
      text: `Seguro que queres eliminar el projecto "${experience.name}"`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí rey',
      cancelButtonText: 'mmm si me lo decis así'
    }).then((result) => {
      if (result.isConfirmed) {
        this.experienceService.deleteExperience(experience.id).subscribe({
          next: (response) => {
            console.log(response)
            this.experienceList = this.experienceList?.filter(exp => exp != experience);
          }
        });
      }
    })
  }

}
