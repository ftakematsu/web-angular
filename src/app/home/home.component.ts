import { Component } from '@angular/core';
import { ExemploComponent } from './components/exemplo/exemplo.component';
import {MatTabsModule} from '@angular/material/tabs';
import { ListComponent } from './components/list/list.component';
import { Observer1Component } from './components/observer1/observer1.component';
import { Observer2Component } from './components/observer2/observer2.component';
import { MatButtonModule } from '@angular/material/button';
import { CountService } from '../services/count.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [
    ExemploComponent, MatTabsModule, ListComponent,
    Observer1Component, Observer2Component, MatButtonModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  myList: number[] = [10, 20, 30, 40, 50];
  soma = 0;

  constructor(
    private service: CountService,
    private router: Router
  ) {

  }

  newEvent(event: any) {
    this.soma = event;
  }

  /**
   * Executa a ação que vai notificar os observadores
   */
  incrementarContador() {
    this.service.incrementar();
  }

  voltar() {
    this.router.navigate(['/']);
  }
}
