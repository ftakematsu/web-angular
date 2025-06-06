import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-example',
  imports: [
    MatFormFieldModule, MatInputModule, FormsModule, 
    MatButtonModule,
  ],
  templateUrl: './example.component.html',
  styleUrl: './example.component.css'
})
export class ExampleComponent {
  email: string = "";
  nome: string = "";

  adicionar() {

  }

}
