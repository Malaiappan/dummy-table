import { Component, OnInit } from '@angular/core';
import { DashBoardData, Item, MainService } from './services/main.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    deck = {
        'deckLength': 1495,
        'deckWidth': 214,
        'cabins': [{
            'cabinClass': 'C',
            'rows': [{
                'rowNumber': 1,
                'columns': [{
                    'code': 'A',
                    'status': 'FREE',
                    'image': 'url',
                    'xCoordinate': 3,
                    'yCoordinate': 3
                },
                    {
                        'code': 'B',
                        'status': 'FREE',
                        'image': 'url',
                        'xCoordinate': 33,
                        'yCoordinate': 3
                    },
                    {
                        'code': 'C',
                        'status': 'FREE',
                        'image': 'url',
                        'xCoordinate': 61,
                        'yCoordinate': 3
                    },
                    {
                        'code': 'D',
                        'status': 'FREE',
                        'image': 'url',
                        'xCoordinate': 120,
                        'yCoordinate': 3
                    },
                    {
                        'code': 'E',
                        'status': 'FREE',
                        'image': 'url',
                        'xCoordinate': 149,
                        'yCoordinate': 3
                    },
                    {
                        'code': 'F',
                        'status': 'FREE',
                        'image': 'url',
                        'xCoordinate': 178,
                        'yCoordinate': 3
                    }
                ]
            }]
        },
            {
                'cabinClass': 'D',
                'rows': [{
                    'rowNumber': 2,
                    'columns': [{
                        'code': 'A',
                        'status': 'FREE',
                        'image': 'url',
                        'xCoordinate': 3,
                        'yCoordinate': 51
                    },
                        {
                            'code': 'B',
                            'status': 'FREE',
                            'image': 'url',
                            'xCoordinate': 33,
                            'yCoordinate': 51
                        },
                        {
                            'code': 'C',
                            'status': 'FREE',
                            'image': 'url',
                            'xCoordinate': 61,
                            'yCoordinate': 51
                        },
                        {
                            'code': 'D',
                            'status': 'FREE',
                            'image': 'url',
                            'xCoordinate': 120,
                            'yCoordinate': 51
                        },
                        {
                            'code': 'E',
                            'status': 'FREE',
                            'image': 'url',
                            'xCoordinate': 149,
                            'yCoordinate': 51
                        },
                        {
                            'code': 'F',
                            'status': 'FREE',
                            'image': 'url',
                            'xCoordinate': 178,
                            'yCoordinate': 51
                        }
                    ]
                },
                    {
                        'rowNumber': 3,
                        'columns': [{
                            'code': 'A',
                            'status': 'FREE',
                            'image': 'url',
                            'xCoordinate': 3,
                            'yCoordinate': 99
                        },
                            {
                                'code': 'B',
                                'status': 'FREE',
                                'image': 'url',
                                'xCoordinate': 33,
                                'yCoordinate': 99
                            },
                            {
                                'code': 'C',
                                'status': 'FREE',
                                'image': 'url',
                                'xCoordinate': 61,
                                'yCoordinate': 99
                            },
                            {
                                'code': 'D',
                                'status': 'FREE',
                                'image': 'url',
                                'xCoordinate': 120,
                                'yCoordinate': 99
                            },
                            {
                                'code': 'E',
                                'status': 'FREE',
                                'image': 'url',
                                'xCoordinate': 149,
                                'yCoordinate': 99
                            },
                            {
                                'code': 'F',
                                'status': 'FREE',
                                'image': 'url',
                                'xCoordinate': 178,
                                'yCoordinate': 99
                            }
                        ]
                    }]
            }]
    };

    getSeatTransform(seat): string {
        return `translate(${seat.xCoordinate}, ${seat.yCoordinate}), scale(0.9)`;
    }

}
