import { Component, OnInit } from '@angular/core';
import { BehaviorService } from 'src/app/services/behavior.service';
import { Book } from 'src/app/book';

import axios from "axios";

import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';
import { BookserviceService } from 'src/app/services/bookservice.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {



  public searchlist: Book[];
  public query;
  private urljson: string = 'http://localhost:3000/articles';
  public name;

  constructor(private behaviorserv: BehaviorService, private authService: AuthenticationService,
    private router: Router, private authservice: AuthenticationService, private bookservice: BookserviceService) {



  }

  ngOnInit() {
    this.behaviorserv.nameSubject.subscribe(username => {


      this.name = username;

    })
    this.behaviorserv.searchsubject.subscribe(queryS => {

     
      this.query = queryS;



      //if query is empty, we are getting the fav items' list in the seaschlist.
      if (this.query === "") {
        this.bookservice.viewfav(this.name).then(data => {
          this.searchlist = data;

          this.router.navigate(['/search']);
        })

      } else {
        this.bookservice.getHeadLines(this.query).then(data => {
          //  console.log(data);
          this.searchlist = data.articles;


          this.router.navigate(['/search']);
        })
      }


    });




  }


  async add(val) {



    if (this.authService.isAuthenticated) {

      //create a new object containing the username as well and then post in the json
      let newobj = {
        user: this.name,
        ...val
      }

      axios.post(this.urljson, newobj)
        .then(function (response) {
          console.log(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    else {

      this.router.navigate(['/login']);
    }
  }

  async deleteFav(val): Promise<any> {
    if (this.authService.isAuthenticated) {
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

            console.log("deletededed");
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


