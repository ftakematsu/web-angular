import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CountService } from '../services/count.service';

@Component({
  selector: 'app-index',
  imports: [],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent {
  cont: number = 0;
  constructor(
    private router: Router,
    private coutService: CountService
  ) {
    this.coutService.cont$.subscribe((value) => {
      this.cont = value;
    });
  }

  irParaInicio() {
    this.router.navigate(['/home']);
  }
}
