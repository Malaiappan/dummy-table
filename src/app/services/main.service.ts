import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

export interface Item {
    name: string;
    location: string;
    statusLastHour: string;
    statusLastDay: string;
}

export interface DashBoardData {
    slno: string;
    urlCode: string;
    oneHrstatus: string;
    twentyFourHrstatus: string;
    urlDescription: string;
}

@Injectable()
export class MainService {

    constructor(private httpClient: HttpClient) {
    }

    getData(): Item[] {
        return [
            {
                name: 'name1',
                location: 'location1',
                statusLastHour: 'green',
                statusLastDay: 'green'
            },
            {
                name: 'name2',
                location: 'location2',
                statusLastHour: 'green',
                statusLastDay: 'yellow'
            },
            {
                name: 'name3',
                location: 'location3',
                statusLastHour: 'green',
                statusLastDay: 'red'
            },
            {
                name: 'name4',
                location: 'location4',
                statusLastHour: 'red',
                statusLastDay: 'yellow'
            }
        ];
    }

    getData2(): Observable<any> {
        return this.httpClient.get('https://services.staging.skyteam.com/v1/skyteamapp/monitor/getdetails');
    }
}
