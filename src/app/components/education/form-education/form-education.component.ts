import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Education } from 'src/app/models/education';
import { EducationService } from 'src/app/services/education.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-education',
  templateUrl: './form-education.component.html',
  styleUrls: ['./form-education.component.scss']
})
export class FormEducationComponent implements OnInit {

  education: Education = new Education();

  constructor(private educationService: EducationService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.loadEducation();
  }

  public loadEducation(): void {
    this.activatedRoute.params.subscribe(params => {
      let id = params['id']
      if (id) {
        this.educationService.getEducationById(id).subscribe(
          education => this.education = education
        )
      }
    })
  }

  public createEducation(): void {
    this.educationService.addEducation(this.education).subscribe(
      (response) => {
        console.log('form enviado')
        this.router.navigate(['/education'])
        Swal.fire({
          title: 'Educacion creada',
          text: `${response.name}`,
          icon: 'success'
        })
      }
    )
  }

  public updateEducation(): void {
    this.educationService.updateEducation(this.education).subscribe(
      (json) => {
        this.router.navigate(['/education'])
        Swal.fire({
          title: 'Education',
          text: `Educación ${json.name} actualizada`,
          icon: 'success',
          confirmButtonText: 'Cool'
        })
      },
    )
  }

}
