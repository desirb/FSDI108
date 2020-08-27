import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  public isUserLoggedIn = false;
  public userName = "";

  constructor() { }
}
