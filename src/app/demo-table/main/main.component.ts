import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { AdGroupService } from 'src/app/ad-group.service';
import { LogService } from 'src/app/log.service';
import { DataRow } from '../../data-row';

@Component({
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  rows: DataRow[];

  constructor(
    private agService: AdGroupService,
    private logService: LogService,
    private ref: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.sendLog('init');
    this.initAdGroupSubscribe();
    this.sendLog('rows subscribed');
  }

  private initAdGroupSubscribe(): void {
    this.agService.getRows().subscribe((data: DataRow[]) => {
      this.rows = data.slice();
      this.sendLog('updating component');
      this.sendLog(this.rows);
      this.ref.detectChanges();
    });
  }

  private sendLog(msg: any): void {
    this.logService.log(msg, 'main.component');
  }

}
