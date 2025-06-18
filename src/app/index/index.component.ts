import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CountService } from '../services/count.service';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { AuthService } from '../services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-index',
  imports: [MatFormFieldModule, MatIconModule, MatInputModule, FormsModule,
    MatButtonModule
  ],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent {

  email: string = "";
  password: string = "";

  cont: number = 0;
  constructor(
    private router: Router,
    private coutService: CountService,
    private authService: AuthService
  ) {
    this.coutService.cont$.subscribe((value) => {
      this.cont = value;
    });
  }

  irParaInicio() {
    this.router.navigate(['/home']);
  }

  login() {
    this.authService.login(this.email, this.password).subscribe({
      next: (response) => { // Requisição ocorreu na normalidade
        console.log(response);

        // Armazena o token no localStorage
        this.authService.setToken(response.token);

        if (response.token) {
          Swal.fire({
            title: response.mensagem,
            icon: 'success'
          });
          this.router.navigate(['home']);
        }

        
      },
      error: (error) => { // Requisição gerou um erro
        Swal.fire({
          title: "Erro",
          text: "Não foi possível realizar o login. Verifique as credenciais e tente novamente",
          icon: 'error'
        });
      }
    });
  }
}
