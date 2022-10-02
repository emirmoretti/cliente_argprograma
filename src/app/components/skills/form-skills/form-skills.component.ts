import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skills } from 'src/app/models/skills';
import { SkillsService } from 'src/app/services/skills.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-skills',
  templateUrl: './form-skills.component.html',
  styleUrls: ['./form-skills.component.scss']
})
export class FormSkillsComponent implements OnInit {

  skills: Skills = new Skills();

  constructor(private skillsServices: SkillsService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.loadEducation();
  }

  public loadEducation(): void {
    this.activatedRoute.params.subscribe(params => {
      let id = params['id']
      if (id) {
        this.skillsServices.getSkillsById(id).subscribe(
          skills => this.skills = skills
        )
      }
    })
  }

  public createSkills(): void {
    this.skillsServices.addSkill(this.skills).subscribe(
      (response) => {
        console.log('form enviado')
        this.router.navigate(['/skills'])
        Swal.fire({
          title: 'Skills creada',
          text: `${response.name}`,
          icon: 'success'
        })
      }
    )
  }

  public updateSkills(): void {
    this.skillsServices.updateSkill(this.skills).subscribe(
      (json) => {
        this.router.navigate(['/skills'])
        Swal.fire({
          title: 'Skills',
          text: `Skills ${json.name} actualizada`,
          icon: 'success',
          confirmButtonText: 'Cool'
        })
      },
    )
  }
}
