import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-list',
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit {
  @Input() listNumber: number[] = [];
  @Output() resultado = new EventEmitter<number>();
  soma: number = 0;

  constructor() {
    
  }

  /**
   * Aqui será executado após os componentes serem inicializados
   */
  ngOnInit(): void {
    for (let x of this.listNumber) {
      this.soma += x;
    }
    // Emite uma resposta para o componente pai
    this.resultado.emit(this.soma);
  }

  clique(x: number) {
    alert("Você clicou em: " + x);
  }
}
