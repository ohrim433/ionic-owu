import { Component, OnInit } from '@angular/core';
import {UserService} from "../services/user.service";
import {UserModel} from "../models/user-model";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  users: UserModel[];

  constructor(private userService: UserService) {
    this.userService.getAllUsers().subscribe(value => this.users = value);
  }

  ngOnInit() {}

}
