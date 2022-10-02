import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Skills } from 'src/app/models/skills';
import { SkillsService } from 'src/app/services/skills.service';
import Swal from 'sweetalert2';
import { ImageDetailsSkillsServicesService } from './image-details-skills/image-details-skills-services.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  skillsList: Skills[] = [];

  skillsSelected: Skills | undefined;

  constructor(private skillsServices: SkillsService, private imageSkillsService: ImageDetailsSkillsServicesService) { }

  ngOnInit(): void {
    this.getSkills();
    this.imageSkillsService.notificarUpload.subscribe(skills => {
      this.skillsList = this.skillsList?.map(skillsOriginal => {
        if(skills.id == skillsOriginal.id){
          skillsOriginal.image = skills.image;
        }
        return skillsOriginal;
      })
    })
  }

  public getSkills(): void {
    this.skillsServices.getSkills().subscribe({
      next: (response: Skills[]) => {
        this.skillsList = response;
      },
      error: (error: HttpErrorResponse) => {
        Swal.fire(
          `${error.error}`,
          'Ocurrio un error',
          'warning'
        )
      }
    })
  }

  public deleteSkills(skill: Skills): void {
    Swal.fire({
      title: 'Estás seguro pa?',
      text: `Seguro que queres eliminar la educación "${skill.name}"`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí rey',
      cancelButtonText: 'mmm si me lo decis así'
    }).then((result) => {
      if (result.isConfirmed) {
        this.skillsServices.deleteSkill(skill.id).subscribe(
          response => {
            this.skillsList = this.skillsList?.filter(sk => sk != skill)
            Swal.fire({
              icon: 'success',
              title: `Skills eliminada`,
            })
          }
        );
      }
    })
  }

  public openModal(skills: Skills){
    this.skillsSelected = skills;
    this.imageSkillsService.abrirModal();
  }
}
