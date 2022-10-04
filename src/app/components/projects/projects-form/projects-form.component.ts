import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from 'src/app/models/project';
import { ProjectsService } from 'src/app/services/projects.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-projects-form',
  templateUrl: './projects-form.component.html',
  styleUrls: ['./projects-form.component.scss']
})
export class ProjectsFormComponent implements OnInit {

  project: Project = new Project();

  fotoSeleccionada: File | any;

  constructor(
    private projectService: ProjectsService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadProject();
  }

  public loadProject(): void {
    this.activatedRoute.params.subscribe(params => {
      let id = params['id']
      if (id) {
        this.projectService.getProjectById(id).subscribe({
          next: (response: Project) => {
            this.project = response;
          }
        })
      }
    })
  }

  public createProject(): void {
    this.projectService.addProject(this.project).subscribe({
      next: response => {
        this.router.navigate(['projects'])
        Swal.fire('Nuevo proyecto', `Proyecto creado con exito ${response.name}`, 'success')
      }
    });
  }
  public updateProject(): void {
    this.projectService.updateProject(this.project).subscribe({
      next: response => {
        this.router.navigate(['projects'])
        Swal.fire('Projecto Actualizado', `Projecto ${response.name}`, 'success')
      }
    })
  }


  public seleccionarFoto($event: any) {
    this.fotoSeleccionada = $event.target.files[0];
    if (this.fotoSeleccionada.type.indexOf('image') < 0) {
      this.fotoSeleccionada = null;
      Swal.fire('Formato no aceptado', 'Ingrese una imagen', 'error');
    }
  }

  public enviarFoto() {
    if (!this.fotoSeleccionada) {
      Swal.fire('Error', 'Debe seleccionar una imagen', 'error')
    } if (!this.project.id) {
      Swal.fire('No existe projecto', 'error', 'error');
    } else {
      this.projectService.subirFoto(this.fotoSeleccionada, this.project?.id).subscribe({
        next: (response: any) => {
          let projectResponse = response as Project;
          this.router.navigate(['projects'])
          Swal.fire('Imagen cargada con exito', `projecto actualizado ${projectResponse.name}`, 'success')
        }
      })
    }
  }
}
