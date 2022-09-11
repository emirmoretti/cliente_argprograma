import { Component, Input, OnInit } from '@angular/core';
import { Education } from 'src/app/models/education';
import { EducationService } from 'src/app/services/education.service';
import Swal from 'sweetalert2';
import { ImageDetailsService } from './image-details.service';

@Component({
  selector: 'app-image-details',
  templateUrl: './image-details.component.html',
  styleUrls: ['./image-details.component.scss']
})
export class ImageDetailsComponent implements OnInit {

  @Input() education: Education | undefined;
  fotoSeleccionada: File | any;

  constructor(public imageDetailsService: ImageDetailsService, private educationService: EducationService) { }

  ngOnInit(): void {
  }

  seleccionarFoto($event: any) {
    this.fotoSeleccionada = $event.target.files[0];
    if (this.fotoSeleccionada.type.indexOf('image') < 0) {
      this.fotoSeleccionada = null;
      Swal.fire('formato no aceptado', 'ingrese una imagen', 'error');
    }
  }
  enviarFoto() {
    if (!this.fotoSeleccionada) {
      Swal.fire('Error', 'Debe seleccionar una imagen', 'error')
    } else {
      this.educationService.subirFoto(this.fotoSeleccionada, this.education?.id).subscribe(
        (response) => {
          Swal.fire('Foto cargada', 'piola', 'success');
        }
      )
    }

  }

  closeModal() {
    this.imageDetailsService.cerrarModal();
  }
}
