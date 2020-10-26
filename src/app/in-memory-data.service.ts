import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

import { DataRow } from './data-row';
import { LogService } from './log.service';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  constructor(
    private logService: LogService
  ) { }

  createDb() {
    const rows = [
      {
        id: 1,
        name: 'Ad Group 1',
        items: [
          {
            id: 1,
            name: 'Computers',
            clicks: 0,
            impressions: 0,
            ctr: 0,
            avgCpc: 0,
            cost: 0,
            conversions: 0,
            costClick: 0
          },
          {
            id: 2,
            name: 'Mobile phones',
            clicks: 0,
            impressions: 0,
            ctr: 0,
            avgCpc: 0,
            cost: 0,
            conversions: 0,
            costClick: 0
          },
          {
            id: 3,
            name: 'Tablets',
            clicks: 0,
            impressions: 0,
            ctr: 0,
            avgCpc: 0,
            cost: 0,
            conversions: 0,
            costClick: 0
          },
        ],
        status: 'Eligible',
        maxCpc: 100.00,
        clicks: 0,
        impressions: 0,
        ctr: 0,
        avgCpc: 0,
        cost: 0,
        conversions: 0,
        costClick: 0
      },
      {
        id: 2,
        name: 'Changi Airport',
        items: [
          {
            id: 1,
            name: 'Computers',
            clicks: 0,
            impressions: 0,
            ctr: 0,
            avgCpc: 0,
            cost: 0,
            conversions: 0,
            costClick: 0
          },
          {
            id: 2,
            name: 'Mobile phones',
            clicks: 0,
            impressions: 0,
            ctr: 0,
            avgCpc: 0,
            cost: 0,
            conversions: 0,
            costClick: 0
          },
          {
            id: 3,
            name: 'Tablets',
            clicks: 0,
            impressions: 0,
            ctr: 0,
            avgCpc: 0,
            cost: 0,
            conversions: 0,
            costClick: 0
          },
        ],
        status: 'Paused',
        maxCpc: 2.30,
        clicks: 0,
        impressions: 0,
        ctr: 0,
        avgCpc: 0,
        cost: 0,
        conversions: 0,
        costClick: 0
      },
    ];

    this.logService.log("in-mem db created.")

    return { rows };
  }

  genId(rows: DataRow[]): number {
    return rows.length > 0 ? Math.max(...rows.map(row => row.id)) + 1 : 1;
  }

}
