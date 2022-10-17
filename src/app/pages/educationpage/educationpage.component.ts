import { Component, OnInit } from '@angular/core';
import { Education } from 'src/app/models/education';
import { EducationService } from 'src/app/services/education.service';

@Component({
  selector: 'app-educationpage',
  templateUrl: './educationpage.component.html',
  styleUrls: ['./educationpage.component.scss']
})
export class EducationpageComponent implements OnInit {

  
  public educationList: Education[] = [];

  constructor( private educationService: EducationService) { }

  ngOnInit(): void {
    this.getEducationList();
  }

  public getEducationList(): void {
    this.educationService.getEducation().subscribe({
      next: (response: Education[]) => {
        if (response) this.educationList = response;
      },
      error: (err) => {
        console.log(err)
      }
    })
  }
}
