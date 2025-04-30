import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountService {
  // Valor inicial do contador
  private contSubject = new BehaviorSubject<number>(0);

  // Definir o observador
  cont$ = this.contSubject.asObservable();

  constructor() { }

  // Ação para alterar o valor (incrementar)
  incrementar() {
    const atual = this.contSubject.getValue();
    this.contSubject.next(atual + 1); // Ação de notificar os observadores
  }

}
