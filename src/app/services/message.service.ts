import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  // Controla a sincronização
  private subject = new BehaviorSubject<string>("");

  // Observador: 
  mensagem$ = this.subject.asObservable();

  constructor() { }

  alterarMensagem(msg: string) {
    // Evento do observador para alterar a mensagem
    this.subject.next(msg);
  }
}
