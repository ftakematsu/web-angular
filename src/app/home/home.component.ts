import { Component } from '@angular/core';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatButtonModule} from '@angular/material/button';
import { MycomponentComponent } from '../mypage/mycomponent/mycomponent.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [MatProgressSpinnerModule, MatButtonModule,
    MycomponentComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private router: Router) {}

  navegar() {
    this.router.navigate(['list']);
  }

  continuar() {
    // Navega para a página identificada pela rota mypage
    this.router.navigate(['mypage']);
  }

  


}
