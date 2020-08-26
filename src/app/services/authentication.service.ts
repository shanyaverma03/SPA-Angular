import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  public users;
  constructor() {
    this.users=[
      {
        username: "admin",
        password: "pass"
      },
      {
        username: "admin1",
        password: "pass1"
      },
      {
        username: "admin2",
        password: "pass2"
      },
      {
        username: "admin3",
        password: "pass3"
      }
    ]

   }

   authenticate(user): any {

    let token;
    
    
    const foundUser = this.users.find(u =>
      u.username === user.username
      && u.password === user.password
    );

    if (foundUser) {
      token = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
      
    }
    return token;
  }

  

  storeToken(token) {
    localStorage.setItem('token', token);
  }


  getToken() {
    return localStorage.getItem('token');
  }

  

  isAuthenticated() {
    

    if (this.getToken()) {
      return true;
    } else {
      return false;
    }
  }

  logout(token){

    localStorage.removeItem('token');
    console.log("deleted")
  }



}
