import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/book';
import { BookserviceService } from 'src/app/services/bookservice.service'
import { query } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

import axios from "axios";
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';
import { BehaviorService } from 'src/app/services/behavior.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  errMessage: string;

  public news: Book;
  public newslist: Book[];
  public url: string;
  private urljson: string = 'http://localhost:3000/articles';
  public name;


  constructor(public bookservice: BookserviceService, private authService: AuthenticationService,
    private behaviorserv: BehaviorService
    , private router: Router) {

    this.news = new Book();
    this.newslist = [];
    this.errMessage = '';
  }

  ngOnInit() {


    if (this.authService.isAuthenticated) {
      this.behaviorserv.nameSubject.subscribe(username => {


        this.name = username;


      })
      this.bookservice.getHeadLines("").then(data => {
        //  console.log(data);
        this.newslist = data.articles;
        //  console.log(this.newslist);
      })
    } else {

      this.router.navigate(['/login']);
    }

  }

  async add(val) {


    if (this.authService.isAuthenticated && this.name !== "") {


      let newobj = {
        user: this.name,
        ...val
      }

      axios.post(this.urljson, newobj)
        .then(function (response) {
         
        })
        .catch(function (error) {
          
        });
    }
    else {

      this.router.navigate(['/login']);
    }
  }

  async deleteFav(val): Promise<any> {
    if (this.authService.isAuthenticated && this.name !== "") {
      try {
        const response = await axios.get(this.urljson);
        let id = "";
        if (response) {

          response.data.forEach((article) => {

            if (article.title === val.title) {
              if (article.user === this.name) {

                id = article.id;
              }
            }
          })
          if (id === "") {
            alert("Fav not found");

          }
          else {

            return await axios.delete('http://localhost:3000/articles/' + id);
          }

        }
        else {
          console.log("Not there");
        }

      } catch (error) {
        console.error(error);
      }
    }
    else {

      this.router.navigate(['/login']);
    }
  }


}