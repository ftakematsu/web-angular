import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Pessoa } from './models/pessoa';
import { PessoaComponent } from './pessoa/pessoa.component';

@Component({
  selector: 'app-mylist',
  imports: [
    MatInputModule, MatFormFieldModule, FormsModule,
    MatButtonModule, CommonModule, PessoaComponent
  ],
  templateUrl: './mylist.component.html',
  styleUrl: './mylist.component.css'
})
export class MylistComponent {
  name: string = '';
  email: string = '';
  lista: Pessoa[] = [];
  id: number = 1;

  add() {
    // Instancia um objeto do tipo Pessoa
    let pessoa = new Pessoa(this.id++, this.name, this.email);
    this.lista.push(pessoa);
    
  }

  remover(pessoa: Pessoa) {
    this.lista = this.lista.filter(p => p.id != pessoa.id);
  }
}
