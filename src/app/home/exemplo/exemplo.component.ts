import { Component, Input } from '@angular/core';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'minha-pagina',
  // Colocar tudo que for utilizar de biblioteca externa
  imports: [
    CommonModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule
  ],
  templateUrl: './exemplo.component.html',
  styleUrl: './exemplo.component.css'
})
export class ExemploComponent {
  @Input() valorX: number = 0;

  nomeDigitado: string = '';
  selecionado: boolean = false;

  calcular() {
    return this.valorX*2;
  }

  enviar() {
    if (this.nomeDigitado.length>0) {
      alert("Olá " + this.nomeDigitado);
    }
    else {
      alert("Nenhum nome foi fornecido. Insira um nome válido!");
    }
  }
}
