import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Education } from 'src/app/models/education';
import { Profile } from 'src/app/models/profile';
import { Skills } from 'src/app/models/skills';
import { EducationService } from 'src/app/services/education.service';
import { ProfileService } from 'src/app/services/profile.service';
import { SkillsService } from 'src/app/services/skills.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  public profile: Profile = new Profile();

  public educationList: Education[] = [];
  
  public skillsList: Skills[] = [];

  modal: boolean = false;

  fotoSeleccionada: File | any;

  constructor(
    private profileService: ProfileService, 
    private educationService: EducationService,
    private skillService: SkillsService
    ) { }

  ngOnInit(): void {
    this.getProfile();
    this.getEducationList();
    this.getSkillsList();
  }

  public getSkillsList(): void {
    this.skillService.getSkills().subscribe({
      next: (response: Skills[]) => {
        this.skillsList = response;
      }
    })
  }

  public getEducationList(): void {
    this.educationService.getEducation().subscribe({
      next: (response: Education[]) => {
        this.educationList = response;
      }
    })
  }

  public getProfile(): void {
    this.profileService.getProfile().subscribe(
      {
        next: (response: Profile) => {
          this.profile = response;
          this.profileService.sharingObservableData = this.profile;
        },
        error: (error: HttpErrorResponse) => {
          alert(error.message);
        }
      })
  }

  public updateProfile(): void {
    this.profileService.update(this.profile).subscribe({
      next: (response) => {
        Swal.fire(
          `Perfil actualizado!`,
          `${response.name}
          ${response.lastName}
          ${response.title}
          ${response.description}`,
          'success'
        )
        this.closeModal();
      }
    })
  }

  public openModal(): void {
    this.modal = true;
  }

  public closeModal(): void {
    this.modal = false;
  }

  seleccionarFoto($event: any) {
    this.fotoSeleccionada = $event.target.files[0];
    if (this.fotoSeleccionada.type.indexOf('image') < 0) {
      this.fotoSeleccionada = null;
      Swal.fire('Formato no aceptado', 'Ingrese una imagen', 'error');
    }
  }

  enviarFoto() {
    if (!this.fotoSeleccionada) {
      Swal.fire('Error', 'Debe seleccionar una imagen', 'error')
    } else {
      this.profileService.subirFoto(this.fotoSeleccionada).subscribe(
        {
          next: (response) => {
            let respon: any = response;
            this.profile = respon as Profile;
            this.profileService.notificarUpload.emit(this.profile);
            this.profileService.sharingObservableData = this.profile;
            Swal.fire('foto cargada', 'piola', 'success');
          },
          error: (response) => {
            Swal.fire(`Ocurrio un error`, `No se pudo cargar la imagen`, 'warning');
          }
        }
      )
    }
  }
}
