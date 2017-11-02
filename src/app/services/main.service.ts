import { Injectable } from '@angular/core';

export interface Item {
  name: string;
  location: string;
  statusLastHour: string;
  statusLastDay: string;
}

@Injectable()
export class MainService {

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
}
