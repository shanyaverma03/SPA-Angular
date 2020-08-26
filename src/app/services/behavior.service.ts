import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class BehaviorService {

  public viewFavSubject= new BehaviorSubject<any>({});
  public searchsubject= new BehaviorSubject<any>({});
  public nameSubject= new BehaviorSubject<string>("");
  constructor() { }

  sendDataToSubject(favlist) {
    this.viewFavSubject.next(favlist);
  }

  sendDataToSearch(query) {
    this.searchsubject.next(query);
    
  }

  sendUsername(username) {
    this.nameSubject.next(username);
    console.log("in behave");
    console.log(username);
  }
}
