import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  allUsers = []; //making it global

  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.allUsers = this.data.getUsers(); //will retrive list of users...stored in the array
  }

}
