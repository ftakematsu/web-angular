import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { Pessoa } from '../models/pessoa';
@Component({
  selector: 'app-pessoa',
  imports: [
    MatButtonModule, MatCardModule
  ],
  templateUrl: './pessoa.component.html',
  styleUrl: './pessoa.component.css'
})
export class PessoaComponent {
  @Input() pessoa?: Pessoa;
  @Output() acaoPessoa = new EventEmitter<Pessoa>();

  getImage() {
    return "https://i.pravatar.cc/300?img=" + this.pessoa?.id;
  }

  acao() {
    this.acaoPessoa.emit(this.pessoa);
  }
}
