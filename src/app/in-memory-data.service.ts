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
          'Computers',
          'Mobile phones',
          'Tablets',
        ],
        status: 'Eligible',
        maxCpc: 100.00,
      },
      {
        id: 2,
        name: 'Changi Airport',
        items: [
          'Computers',
          'Mobile phones',
          'Tablets',
        ],
        status: 'Paused',
        maxCpc: 2.30,
      },
    ];

    this.logService.log("in-mem db created.")

    return { rows };
  }

  genId(rows: DataRow[]): number {
    return rows.length > 0 ? Math.max(...rows.map(row => row.id)) + 1 : 1;
  }
  
}
