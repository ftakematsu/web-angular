import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Usuario } from './models/usuario';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-example',
  imports: [
    MatFormFieldModule, MatInputModule, FormsModule, 
    MatButtonModule, CommonModule
  ],
  templateUrl: './example.component.html',
  styleUrl: './example.component.css'
})
export class ExampleComponent {
  email: string = "";
  nome: string = "";
  lista: Usuario[] = []; // Lista inicialmente vazia
  qtd: number = 0;

  adicionar() {
    // Instanciar a classe
    let usuario: Usuario;
    usuario = new Usuario(++this.qtd, this.nome, this.email);
    this.lista.push(usuario);
  }

  alterar(item: Usuario) {
    item.ativo = !item.ativo; // Alterna de true para false
  }

}
