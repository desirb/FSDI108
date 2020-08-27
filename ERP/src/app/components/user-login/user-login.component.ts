import { Component, OnInit } from '@angular/core';
import { Data, Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { SharedService } from './../../services/shared.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {
  email = "";
  password = "";
  loginError = false;

  constructor(private data: DataService, private router: Router, private shared: SharedService) { }

  ngOnInit(): void {
  }

  login() {
    console.log("Login fn", this.email, this.password);

    var allUsers = this.data.getUsers();
    var found = false;

    for(let i=0; i<allUsers.length; i++){
      let user = allUsers[i];

      if(user.email === this.email && user.password === this.password){
        console.log("Valid credentials!");
        found = true;
        this.loginError = false;

        this.shared.isUserLoggedIn = true;
        this.shared.userName = user.username;

        //send user to another page using angualr service
        this.router.navigateByUrl("/register");
    }

    if(!found) {
      this.loginError = true;
      console.log("Error, incorrect credentials!");
    }
  }

}
}