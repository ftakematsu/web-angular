import { Component } from '@angular/core';
import { ExemploComponent } from './exemplo/exemplo.component';
import {MatTabsModule} from '@angular/material/tabs';
import { ListComponent } from './list/list.component';

@Component({
  selector: 'app-home',
  imports: [ExemploComponent, MatTabsModule, ListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
