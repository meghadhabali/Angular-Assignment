import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { AppModel } from "./app.model";
import fruitsData from "../assets/data/fruits.json";

@Injectable()
export class FruitService {
  // private fruits : AppModel[] = [
  //   new AppModel("Apple", 1, 30, 1, "Imported from Swiss", "Premium"),
  //   new AppModel("Mango", 2, 50, 1, "Farmed at Selam", "Tamilnadu"),
  //   new AppModel("Bananna", 3, 5, 0, "", ""),
  //   new AppModel("Orange", 4, 25, 1, "from Nagpur", "Premium")

  // ]


    constructor(private http: HttpClient){}

    // fetchFruit() {
    //   return  this.http.get('/assets/data/fruits.json');
    // }
   fetchFruit( ){
     return fruitsData;
   }
}