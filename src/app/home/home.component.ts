import { Component } from '@angular/core';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [MatProgressSpinnerModule, MatDividerModule,
    MatButtonModule, CommonModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  loading: boolean = true;

  constructor(private route: Router) {

  }

  executar() {
    this.loading = !this.loading;
  }

  navegar() {
    this.route.navigate(['mypage']);
  }
}
