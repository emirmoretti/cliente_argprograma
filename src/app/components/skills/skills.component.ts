import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Skills } from 'src/app/models/skills';
import { SkillsService } from 'src/app/services/skills.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  skillsList: Skills[] = [];

  constructor(private skillsServices: SkillsService) { }

  ngOnInit(): void {
    this.getSkills();
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
          'error'
        )
      }
    })
  }

}
