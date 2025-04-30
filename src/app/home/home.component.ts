import { Component } from '@angular/core';
import { ExemploComponent } from './components/exemplo/exemplo.component';
import {MatTabsModule} from '@angular/material/tabs';
import { ListComponent } from './components/list/list.component';

@Component({
  selector: 'app-home',
  imports: [ExemploComponent, MatTabsModule, ListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  myList: number[] = [10, 20, 30, 40, 50];
  soma = 0;

  newEvent(event: any) {
    this.soma = event;
  }
}
