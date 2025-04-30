import { Component } from '@angular/core';
import { CountService } from '../../../services/count.service';

@Component({
  selector: 'app-observer1',
  imports: [],
  templateUrl: './observer1.component.html',
  styleUrl: './observer1.component.css'
})
export class Observer1Component {
  cont: number = 0;
  constructor(private service: CountService) {
    // Atualizar os dados (sincronizar)
    this.service.cont$.subscribe(value => {
      // Quando alguma ação next ocorrer, este será notificado e retornará o valor em value
      this.cont = value;
    });
  }
}
