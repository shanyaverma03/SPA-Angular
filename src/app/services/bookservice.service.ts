import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Book } from 'src/app/book';
import axios from "axios";
import {AxiosInstance} from "axios";
import { filter, map } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs/internal/observable/throwError';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BookserviceService {

  private url: string='http://newsapi.org/v2/top-headlines?' +
  'country=us&' +
  'apiKey=6c127f1049794e5d90ae859cc1c58797';

  private urljson: string='http://localhost:3000/articles';
 

 
  public news;
  public favlist;

  constructor(private httpClient: HttpClient, 
    private authService: AuthenticationService,
  private router: Router) { 
      this.news=[];
      this.favlist=[];
    }

     async getHeadLines(myquery): Promise<any>{
      try {
        if(myquery==="") {
        const response = await axios.get(this.url);
        // console.log(response);
        return response.data;
        }
        else{
          this.url= 'http://newsapi.org/v2/everything?' 
          +`q=${myquery}&` +
          'sortBy=popularity&' +
          'apiKey=6c127f1049794e5d90ae859cc1c58797';
          const response = await axios.get(this.url);
        // console.log(response);
        return response.data;
        }
      } catch (error) {
        console.error(error);
      }
     }

     async viewfav(name) :Promise<any> {
      
      let answer=[];
      const response = await axios.get(this.urljson);
    
      response.data.forEach((article)=>{
        if(article.user===name){
          answer.push(article);
        }
      });
      return answer;
      
      
      
      // this.router.navigate(['/viewfav']);
     
     }

     
    
     }

    // deleteFav(val): Observable<any> {
    //   return this.httpClient.delete<any>(this.urljson, val);
    // }

    