import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ExemploComponent } from './home/components/exemplo/exemplo.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ExemploComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
