import { Component } from '@angular/core';
import { CountService } from '../../../services/count.service';

@Component({
  selector: 'app-observer2',
  imports: [],
  templateUrl: './observer2.component.html',
  styleUrl: './observer2.component.css'
})
export class Observer2Component {
  cont: number = 0;
  constructor(private service: CountService) {
    this.service.cont$.subscribe(value => {
      this.cont = value;
    });
  }
}
