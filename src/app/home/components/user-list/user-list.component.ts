import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit {
  users: any[] = [];
  constructor(private userService: UserService) {

  }

  ngOnInit(): void {
    this.userService.getUsers().subscribe((response) => {
      this.users = response;
      console.log(this.users);
    });
  }


}
