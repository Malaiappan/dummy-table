import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

export interface SeatMapQuery {
    origin: string;
    destination: string;
    departureDate: string;
    departureTime: string;
    flightNumber: string;
}


@Injectable()
export class MainService {

    constructor(private httpClient: HttpClient) {
    }

    getData(seatMapQuery: SeatMapQuery): Observable<any> {
        const query = `mode=2&origin=${seatMapQuery.origin}&destination=${seatMapQuery.destination}&flightNo=${seatMapQuery.flightNumber}&departureDate=${seatMapQuery.departureDate}&departureTime=${seatMapQuery.departureTime}&bookingClass=T&&passengerCount=2`;
        return this.httpClient.get(`https://services.staging.skyteam.com/services/seamlessancillary/sky/seatmap?${query}`);
    }
}
