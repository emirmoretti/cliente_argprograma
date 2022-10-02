import { Component, Input, OnInit } from '@angular/core';
import { Skills } from 'src/app/models/skills';
import { SkillsService } from 'src/app/services/skills.service';
import Swal from 'sweetalert2';
import { ImageDetailsSkillsServicesService } from './image-details-skills-services.service';

@Component({
  selector: 'app-image-details-skills',
  templateUrl: './image-details-skills.component.html',
  styleUrls: ['./image-details-skills.component.scss']
})
export class ImageDetailsSkillsComponent implements OnInit {

  @Input() skill: Skills | undefined;

  fotoSeleccionada: File | any;

  constructor(private SkillsServices: SkillsService, public imageSkillsService: ImageDetailsSkillsServicesService) { }

  ngOnInit(): void {
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
      this.SkillsServices.subirFoto(this.fotoSeleccionada, this.skill?.id).subscribe(
        (response) => {
          let respon: any = response;
          //console.log(respon)
          this.skill = respon as Skills;
          this.imageSkillsService.notificarUpload.emit(this.skill);
          Swal.fire('Foto cargada', 'piola', 'success');
        },
        (catchError) => {
          Swal.fire('Ocurrio un error', `no se pudo cargar la imagen`, 'warning');
        }
      )
    }

  }

  closeModal() {
    this.imageSkillsService.cerrarModal();
  }
}
