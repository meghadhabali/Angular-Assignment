import { Observable } from 'rxjs';
import { FruitService } from './fruit.service';
import { Component } from '@angular/core';
import { AppModel } from './app.model';

interface Fruits {  
  p_name: String;
  p_id: Number;  
  p_cost: Number;  
  p_availability: Number;  
  p_details: String;
  p_category : String;  
} 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
   //fruits?:AppModel[];
   fruits? : Fruits[];
  //  fruits = [
  //   {
  //   "p_name":"Orange",
  //   "p_id":4,
  //   "p_cost":25,
  //   "p_availability":1,
  //   "p_details":"from Nagpur",
  //   "p_category":"Premium"
  //   }
  //  ]
  //  ;
  constructor(private FruitService : FruitService) {}
  
  
  ngOnInit() {
    this.fruits = this.FruitService.fetchFruit();
    console.log(this.fruits);
  }

  // fetchFruit() {
  //   this.fruits = this.FruitService.fetchFruit();
  // }
}
