import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _userIsAthenticated = false
  
  get userIsAutheticated (){
    return this._userIsAthenticated;
    }

  constructor() { }  

  login(){
    this._userIsAthenticated = true;
  }

  logout(){
    this._userIsAthenticated = false;
  }
}
