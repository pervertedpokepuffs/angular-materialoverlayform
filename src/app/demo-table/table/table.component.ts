import { Component, OnInit, Input, ChangeDetectionStrategy, Output } from '@angular/core';
import { DataRow } from '../../data-row';
import { LogService } from '../../log.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableComponent implements OnInit {
  @Input()
  rows: DataRow[];
  @Output()
  displayedColumns: string[] = ['name', 'status', 'maxCpc', 'clicks', 'impressions', 'ctr', 'avgCpc', 'cost', 'conversions', 'costClick'];
  itemsDisplayedColumns: string[] = [];

  constructor(
    private logService: LogService
  ) { }

  ngOnInit(): void {
    this. sendLog('building table')
    this.getItemsDisplayedColumns();
  }

  getItemsDisplayedColumns() {
    for(const column of this.displayedColumns)
      this.itemsDisplayedColumns.push(`item-${column}`);
  }

  private sendLog(msg: any): void {
    this.logService.log(msg, 'table.component');
  }

}
