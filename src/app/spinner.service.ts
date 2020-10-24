import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LogService } from './log.service';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  spinnerState: BehaviorSubject<boolean>;

  constructor(
    private logService: LogService
  ) {
    this.spinnerState = new BehaviorSubject<boolean>(false);
  }

  toggle(): void {
    this.spinnerState.next(!this.spinnerState.getValue());
    this.logService.log(`current spinnerState: ${this.spinnerState.getValue()}`);
  }
}
