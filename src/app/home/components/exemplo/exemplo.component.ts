import { Component, Input } from '@angular/core';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MessageService } from '../../../services/message.service';

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
  mensagem$: any;

  // Injeção de dependência (declara um objeto Service diretamente)
  constructor(private messageService: MessageService) {
    this.mensagem$ = this.messageService.mensagem$;
  }

  nomeDigitado: string = '';
  selecionado: boolean = false;

  calcular() {
    // Ação para ativar o observador: 
    
    return this.valorX*2;
  }

  enviar() {
    this.messageService.alterarMensagem("Mensagem enviada com sucesso!");
    if (this.nomeDigitado.length>0) {
      alert("Olá " + this.nomeDigitado);
    }
    else {
      alert("Nenhum nome foi fornecido. Insira um nome válido!");
    }
  }
}
