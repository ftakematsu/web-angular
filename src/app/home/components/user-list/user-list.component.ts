import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { CommonModule } from '@angular/common';
import { User } from '../../models/user.model';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit {
  users: User[] = [];
  cepDigitado: string = '86077080';
  items: any = [];
  constructor(private userService: UserService) {

  }

  ngOnInit(): void {
    this.userService.getUsers().subscribe((response) => {
      this.users = response;
      console.log(this.users);
    });

    this.userService.getItems().subscribe((response) => {
      this.items = response;
    });

    this.buscarCEP();
  }

  generateImgLink(id?: number) {
    return "https://i.pravatar.cc/150?img=" + id;
  }

  buscarCEP() {
    this.userService.getCEP(this.cepDigitado).subscribe({
      next: (response) => {
        console.log(response);
        console.log(response.localidade);
      },
      error: (erro) => {
        console.error(erro);
      }
    });
  }

}
