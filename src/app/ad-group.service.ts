import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of, Subject } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { LogService } from './log.service';
import { DataRow } from './data-row';

@Injectable({
  providedIn: 'root'
})
export class AdGroupService {
  private adGroupUrl = 'api/rows';
  rowChanged: Subject<boolean>;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    private logService: LogService
  ) {
    this.rowChanged = new Subject<boolean>();
  }

  async getRows(): Promise<any> {
    return this.http.get(this.adGroupUrl).pipe(
      tap(_ => this.logMessage('fetched data-rows')),
      catchError(this.handleError<DataRow[]>('get rows'))
    ).toPromise();
  }

  updateRow(data: DataRow): Observable<any> {
    this.logService.log('updating row');
    this.logService.log(data);
    return this.http.put(this.adGroupUrl, data, this.httpOptions).pipe(
      tap(_ => this.logMessage(`updated row id=${data.id}`),
      catchError(this.handleError<any>('updateRow')))
    );
  }

  private handleError<T>(operation: string = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      this.logService.log(`failed to ${operation}`);
      this.logService.log(error);
      return of(result as T);
    };
  }

  private logMessage(message: string) {
    this.logService.log(`AdGroupService: ${message}`);
  }

}
