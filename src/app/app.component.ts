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
    apiFailed: boolean;
    lastRefreshedTime: string;
    alert: boolean;

    constructor(private mainService: MainService) {
    }

    ngOnInit() {
        this.items = this.mainService.getData();
        this.getLevelOneData();
        this.autoRefresh();
    }

    refreshData() {
        this.getLevelOneData();
    }

    autoRefresh() {
        setInterval(() => {
            this.getLevelOneData();
        }, 60 * 1000);
    }

    private getLevelOneData() {
        this.lastRefreshedTime = new Date().toLocaleTimeString();
        this.mainService.getData2()
            .subscribe((res) => {
                    this.levelOneData = res.dashBoardData;
                    this.apiFailed = false;
                    this.alert = this.levelOneData
                        .map(data => data.oneHrstatus)
                        .filter(oneHrStatus => oneHrStatus === 'red')
                        .length > 2;
                },
                (err) => {
                    console.log(err);
                    this.apiFailed = true;
                });
    }
}
