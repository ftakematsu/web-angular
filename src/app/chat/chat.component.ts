import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import Pusher from 'pusher-js';

@Component({
  selector: 'app-chat',
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent implements OnInit {
  novaMensagem: string = '';

  mensagens: string[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // Pusher DEBUG opcional
    Pusher.logToConsole = true;

    // Configura o cliente Pusher
    const pusher = new Pusher('app-key', {
      cluster: 'mt1',
      wsHost: 'localhost',     // se usar Docker, pode mudar para IP da máquina host ou 'host.docker.internal'
      wsPort: 6001,            // porta configurada no Laravel/Soketi
      forceTLS: false,
      disableStats: true,
      enabledTransports: ['ws'], // apenas WebSocket puro
    });

    const channel = pusher.subscribe('chat'); // mesmo nome da `Channel` no evento Laravel
    channel.bind('MensagemEnviada', (data: any) => {
      console.log('Evento recebido:', data);
      this.mensagens.push(data.mensagem);
    });
  }

  enviar(): void {
    if (!this.novaMensagem.trim()) return;

    this.http.post('http://localhost:8000/api/enviar', {
      mensagem: this.novaMensagem
    }).subscribe(() => {
      this.novaMensagem = '';
    });
  }
}
