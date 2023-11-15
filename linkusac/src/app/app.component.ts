import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'linkusac';

  constructor(private router:Router){

  }

  Show(){
    this.router.navigate(["show"]);
  }
  Add(){
    this.router.navigate(["add"]);
  }
}
