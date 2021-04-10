import { Component, OnInit } from '@angular/core';
import { ListUsers } from './user.model';
import { UserService } from './user.service';

@Component({
  selector: 'users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  listUsers: ListUsers;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(
      res => this.listUsers = res
    )
  }

}
