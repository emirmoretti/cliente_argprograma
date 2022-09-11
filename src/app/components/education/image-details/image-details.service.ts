import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageDetailsService {

  modal: Boolean = false;

  constructor() { }

  abrirModal(){
    this.modal = true;
  }

  cerrarModal(){
    this.modal = false;
  }
}
