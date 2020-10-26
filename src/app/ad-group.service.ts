import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { BehaviorSubject, Observable, of, ReplaySubject } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { LogService } from './log.service';
import { DataRow } from './data-row';

@Injectable({
  providedIn: 'root'
})
export class AdGroupService {
  private adGroupUrl = 'api/rows';
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  rows: ReplaySubject<DataRow[]>;

  constructor(
    private http: HttpClient,
    private logService: LogService
  ) {
    this.rows = new ReplaySubject();
    this.http.get(this.adGroupUrl).pipe(
      tap(() => this.logMessage('fetched rows')),
      catchError(this.handleError<DataRow[]>('get rows'))
    ).subscribe((data: DataRow[]) => this.rows.next(data));
  }

  getRows(): Observable<DataRow[]> {
    this.http.get(this.adGroupUrl).pipe(
      tap(() => this.logMessage('fetched rows')),
      catchError(this.handleError<DataRow[]>('get rows'))
    ).subscribe((data: DataRow[]) => this.rows.next(data));
    return this.rows.asObservable();
  }

  updateRow(data: DataRow): Observable<any> {
    this.logMessage('updating row');
    this.logMessage(data);
    return this.http.put(this.adGroupUrl, data, this.httpOptions).pipe(
      tap(_ => {
        this.logMessage(`updated row id=${data.id}`);
        this.getRows();
      },
      catchError(this.handleError<any>('updateRow')))
    );
  }

  private handleError<T>(operation: string = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      this.logMessage(`failed to ${operation}`);
      this.logMessage(error);
      return of(result as T);
    };
  }

  private logMessage(message: any) {
    this.logService.log(message, 'ad-group.service');
  }

}
