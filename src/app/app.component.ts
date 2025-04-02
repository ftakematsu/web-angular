import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ExemploComponent } from './home/exemplo/exemplo.component';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ExemploComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'projeto-angular';
}
