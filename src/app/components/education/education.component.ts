import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Education } from 'src/app/models/education';
import { EducationService } from 'src/app/services/education.service';
import Swal from 'sweetalert2';
import { ImageDetailsService } from './image-details/image-details.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

  educationList: Education[]  | undefined;

  educationSelected: Education | undefined;

  constructor(
    private educationService: EducationService, 
    private router: Router,
    private imageDetailsService: ImageDetailsService) { }

  ngOnInit(): void {
    this.getEducations();

    this.imageDetailsService.notificarUpload.subscribe(education => {
      this.educationList = this.educationList?.map(educationOriginal => {
        if(education.id == educationOriginal.id){
          educationOriginal.image = education.image;
        }
        return educationOriginal;
      })
    })
  }

  public getEducations(): void {
    this.educationService.getEducation().subscribe({
      next: (response: Education[]) => {
        this.educationList = response;
      },
      error: (error: HttpErrorResponse) => {
        Swal.fire(
          `${error.error}`, 
          'Ingrese datos de educación',
          'warning'
        )
      }
    })
  }

  public deleteEducation(education: Education): void {
    Swal.fire({
      title: 'Estás seguro pa?',
      text: `Seguro que queres eliminar la educación "${education.name}"`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí rey',
      cancelButtonText: 'mmm si me lo decis así'
    }).then((result) => {
      if (result.isConfirmed) {
        this.educationService.delete(education.id).subscribe(
          response => {
            this.educationList = this.educationList?.filter(edu => edu != education)
            Swal.fire({
              icon: 'success',
              title: `Educación eliminada`,
            })
          }
        );
      }
    })
  }

  public openModal(education: Education){
    this.educationSelected = education;
    this.imageDetailsService.abrirModal();
  }

}
