import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home'},
    {title: "Login", url:"/login", icon: "log-in"},
    {title: 'Customers', url: '/customers', icon: 'people'},
    {title: "Recipes", url:"/foods", icon:"fast-food"},
  ];
  constructor() {}
}
