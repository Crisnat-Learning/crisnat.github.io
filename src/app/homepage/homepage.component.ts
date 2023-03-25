import { Component } from "@angular/core"

@Component({
    selector:"app-home",
    templateUrl:"./homepage.html",
    styleUrls:['./homepage.css']
})
export class homepage{
    defaultElevation = 2;
    raisedElevation = 8;
  
    name = 'Angular';
}