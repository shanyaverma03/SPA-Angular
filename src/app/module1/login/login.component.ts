import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';
import { BehaviorService } from 'src/app/services/behavior.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private authService: AuthenticationService, private behaviorserv: BehaviorService) { }

  ngOnInit() {
  }

  login(user) {

    let token = this.authService.authenticate(user);
    



    if (token) {
      this.behaviorserv.sendUsername(user.username);
      this.authService.storeToken(token);

      this.router.navigate(['/dashboard']);
    }
    else {
      this.router.navigate(['/login']);
    }
  }
}
