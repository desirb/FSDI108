import { User } from '../../models/user';
import { Component, OnInit } from '@angular/core';
import { DataService } from './../../services/data.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent implements OnInit {

  model: User = new User();
  retypePassword: string;
  showAlert = false;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }
  //true = button disabled
  //false = button enabled
  shouldSaveDisable() {
    if(!this.model.userName || !this.model.email || !this.model.employeeNumber){
      return true; //disable
    }

    //validate passwords
    if(!this.model.password || this.model.password != this.retypePassword){
      return true;
    }

    return false;
  }

  saveUser() {
    //save user
    this.dataService.saveUser(this.model);

    //clear the form
    this.model = new User();
    this.retypePassword = "";

    //show successfully registered message
    this.showAlert = true;
    setTimeout(() => {
      this.showAlert = false;
    }, 3000)
  }

}
