import { Component, OnInit } from '@angular/core';
import { DashBoardData, Item, MainService } from './services/main.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    items: Item[];
    levelOneData: DashBoardData[];
    lastRefreshedTime: string;

    constructor(private mainService: MainService) {
    }

    ngOnInit() {
        this.items = this.mainService.getData();
        this.getLevelOneData();
    }

    refreshData() {
        this.getLevelOneData();
    }

    private getLevelOneData() {
        this.lastRefreshedTime = new Date().toLocaleTimeString();
        this.mainService.getData2()
            .subscribe((res) => {
                this.levelOneData = res.dashBoardData;
            });
    }
}
