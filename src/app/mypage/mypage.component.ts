import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import { MycomponentComponent } from './mycomponent/mycomponent.component';
import { SecondComponent } from './second/second.component';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-mypage',
  imports: [
    MatInputModule, 
    MatFormFieldModule, 
    FormsModule,
    MycomponentComponent,
    SecondComponent,
    CommonModule,
    MatButtonModule
  ],
  templateUrl: './mypage.component.html',
  styleUrl: './mypage.component.css'
})
export class MypageComponent {
  nome: string = "";

  lista = [
    { nome: "Fulano de Tal", idade: 20 },
    { nome: "Beltrano de Tal", idade: 25 },
    { nome: "Ciclano de Tal", idade: 35 }
  ];

  enviar() {
    alert("Boa noite " + this.nome);
  }
}
