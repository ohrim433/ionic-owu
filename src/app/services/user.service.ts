import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UserModel} from "../models/user-model";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) {
  }

  getAllUsers() {
    return this.httpClient.get<UserModel[]>('https://jsonplaceholder.typicode.com/users');
  }
}
