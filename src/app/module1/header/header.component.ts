import { Component, OnInit } from '@angular/core';

import axios from "axios";
import { Book } from 'src/app/book';
import { BehaviorService } from 'src/app/services/behavior.service';
import { Router } from '@angular/router';
import { BookserviceService } from 'src/app/services/bookservice.service';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public fav: Book;
  public favlist: Book[];
  public searchList: Book[];
  private urljson: string = 'http://localhost:3000/articles';

  constructor(private BehaviorServ: BehaviorService, private router: Router,
    private authservice: AuthenticationService, private bookservice: BookserviceService) {
    this.fav = new Book();
    this.favlist = [];
    this.searchList = [];

  }

  ngOnInit() {
  }


  //send the query string so that SearchComponent can access
  send(query) {
    this.BehaviorServ.sendDataToSearch(query);
  }



  logout() {
    if (this.authservice.isAuthenticated) {
      let token = this.authservice.getToken();
      this.authservice.logout(token);
      this.router.navigate(['/logout']);
    }


  }
}
