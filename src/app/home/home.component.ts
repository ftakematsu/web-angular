import { Component } from '@angular/core';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatButtonModule} from '@angular/material/button';
import { Router } from '@angular/router';
import { MycomponentComponent } from '../mypage/mycomponent/mycomponent.component';

@Component({
  selector: 'app-home',
  imports: [MatProgressSpinnerModule, MatButtonModule,
    MycomponentComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  /** Injeção de dependência para que a classe possa 
   * utilizar o objeto router
   */
  constructor(private router: Router) {

  }

  continuar() {
    // Navega para a página identificada pela rota mypage
    this.router.navigate(['mypage']);
  }

  navegar() {
    this.router.navigate(['exemplo']);
  }


}
