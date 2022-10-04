import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project';
import { ProjectsService } from 'src/app/services/projects.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projectList: Project[] = [];


  constructor(private projectService: ProjectsService) { }

  ngOnInit(): void {
    this.getProjects();
  }

  public getProjects(): void {
    this.projectService.getProjects().subscribe({
      next: (response: Project[]) => {
        this.projectList = response;
      },
      error: (err) => {
        console.log(err.message);
      }
    })
  }

  public deleteProject(project: Project): void {
    Swal.fire({
      title: 'Estás seguro pa?',
      text: `Seguro que queres eliminar el projecto "${project.name}"`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí rey',
      cancelButtonText: 'mmm si me lo decis así'
    }).then((result) => {
      if (result.isConfirmed) {
        this.projectService.delete(project.id).subscribe({
          next: (response) => {
            console.log(response)
            this.projectList = this.projectList?.filter(proj => proj != project);
          }
        });
      }
    })
  }

}
