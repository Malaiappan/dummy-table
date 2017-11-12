import { Component, OnInit } from '@angular/core';
import { MainService, SeatMapQuery } from './services/main.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    // origin: string = '';
    // destination: string = '';
    // departureDate: string = '';
    // departureTime: string = '';
    // flightNumber: string = '';

    origin: string = 'ATL';
    destination: string = 'MSP';
    departureDate: string = '15NOV';
    departureTime: string = '0727A';
    flightNumber: string = 'DL1866';

    deck: any;
    seatMapLoaded: boolean = false;
    seatMapRequested: boolean;

    constructor(private mainService: MainService) {
    }

    ngOnInit() {
        // this.getSeatMap();
    }

    getSeatMap() {
        this.seatMapRequested = true;
        this.seatMapLoaded = false;
        const seatMapQuery: SeatMapQuery = {
            origin: this.origin,
            destination: this.destination,
            departureDate: this.departureDate,
            departureTime: this.departureTime,
            flightNumber: this.flightNumber
        }
        this.mainService.getData(seatMapQuery)
            .subscribe(res => {
                    this.deck = res.customSeatMapResponse.decks;
                    this.seatMapLoaded = true;
                },
                err => {
                    console.log(err);
                });
    }

    getSeatTransform(seat): string {
        return `translate(${seat.xCoordinate}, ${seat.yCoordinate}), scale(0.9)`;
    }

}
