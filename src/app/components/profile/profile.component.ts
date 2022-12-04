import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Profile } from 'src/app/models/profile';
import { ProfileService } from 'src/app/services/profile.service';
import { StorageService } from 'src/app/services/storage.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  public profile: Profile = new Profile();

  modal: boolean = false;

  fotoSeleccionada: File | any;

  isLogged: boolean = false;


  constructor(
    private profileService: ProfileService,
    private storage: StorageService,
    public translate: TranslateService
  ) {

  }

  ngOnInit(): void {
    this.getProfile();
    this.isLogged = this.storage.isLoggedIn();
  }

  public getProfile(): void {
    this.profileService.getProfile().subscribe(
      {
        next: (response: Profile) => {
          if (response) {
            this.profile = response;
            this.profileService.sharingObservableData = this.profile;
          }
        },
        error: (error: HttpErrorResponse) => {
          alert(error.message);
        }
      })
  }

  public createProfile(): void {
    this.profileService.saveProfile(this.profile).subscribe({
      next: (resp: Profile) => {
        this.profile = resp;
        Swal.fire('perfil creado', `${resp.name}`, 'success');
        this.closeModal();
        window.location.reload();
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
    this.fotoSeleccionada = null;
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
