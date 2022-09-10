import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private educationService: EducationService, private router: Router) { }

  ngOnInit(): void {
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

}
