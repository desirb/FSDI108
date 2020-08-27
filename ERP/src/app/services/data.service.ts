import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private allUsers = [];

  constructor() { 
    var admin = new User();
    admin.email = "admin@mail.com";
    admin.password = "admin";
    admin.firstName = "admin";
    admin.lastName = "admin";
    admin.employeeNumber = 0;
    admin.userName = "admin";

    this.allUsers.push(admin);
  }

  public saveUser(user) {
    this.allUsers.push(user);
  }

  public getUsers() {
    return this.allUsers;
  }
}
