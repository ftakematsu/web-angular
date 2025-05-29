import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-mypage',
  imports: [MatInputModule, MatFormFieldModule, FormsModule],
  templateUrl: './mypage.component.html',
  styleUrl: './mypage.component.css'
})
export class MypageComponent {
  nome: string = "";
  enviar() {
    alert("Boa noite " + this.nome);
  }
}
