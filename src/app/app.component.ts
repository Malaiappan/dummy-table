import { Component, OnInit } from '@angular/core';
import { Item, MainService } from './services/main.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  items: Item[];
  lastRefreshedTime = '10:10';

  constructor(private mainService: MainService) {
  }

  ngOnInit() {
    this.items = this.mainService.getData();
  }
}
