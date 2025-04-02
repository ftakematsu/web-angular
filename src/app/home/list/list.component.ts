import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  listNumber: number[];
  
  constructor() {
    this.listNumber = [10, 20, 30, 40, 50];
  }
}
