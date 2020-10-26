import { ConnectedPosition } from '@angular/cdk/overlay';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { DataRow } from '../../data-row';
import { AdGroupService } from '../../ad-group.service';
import { LogService } from '../../log.service';

interface CpcForm {
  maxCpcField: string
}

@Component({
  selector: 'app-overlay-form',
  templateUrl: './overlay-form.component.html',
  styleUrls: ['./overlay-form.component.scss']
})
export class OverlayFormComponent implements OnInit {
  @Input()
  row: DataRow;
  @Output()
  updatingData: EventEmitter<boolean> = new EventEmitter();
  isOpen: BehaviorSubject<boolean> = new BehaviorSubject(false);
  spinnerState: BehaviorSubject<boolean> = new BehaviorSubject(false);
  positions: ConnectedPosition[] = [
    {
      originX: "end",
      originY: "top",
      overlayX: "start",
      overlayY: "top",
      offsetX: 10
    },
    {
      originX: "center",
      originY: "bottom",
      overlayX: "center",
      overlayY: "top",
    }
  ];
  maxCpcForm = new FormGroup({
    maxCpcField: new FormControl()
  });

  constructor(
    private agService: AdGroupService,
    private logService: LogService
  ) { }

  ngOnInit(): void {
    this.maxCpcForm.get('maxCpcField').setValue(this.row.maxCpc.toFixed(2));
  }

  onIconClick() {
    this.isOpen.next(!this.isOpen.getValue());
  }

  onCancelClick() {
    this.closeOverlay();
  }

  onSubmit(formData: CpcForm) {
    let newData = JSON.parse(JSON.stringify(this.row));
    this.sendLog('submitting data')
    this.spinnerToggle();
    newData.maxCpc = +formData.maxCpcField;
    this.agService.updateRow(newData).subscribe(_ => {
      this.spinnerToggle();
      this.closeOverlay();
      this.updatingData.emit(true);
    })
  }

  onChange() {
    let input: number = +this.maxCpcForm.get('maxCpcField').value;
    this.sendLog(`updating value: ${input.toFixed(2)}`)
    this.maxCpcForm.get('maxCpcField').setValue(input.toFixed(2));
  }

  private closeOverlay() {
    this.isOpen.next(false);
    this.sendLog(`closing overlay: state: ${this.isOpen.getValue()}`);
  }

  private spinnerToggle() {
    this.spinnerState.next(!this.spinnerState.getValue())
    this.sendLog(`current spinnerState: ${this.spinnerState.getValue()}`)
  }

  private sendLog(msg: any): void {
    this.logService.log(msg, 'overlay-form')
  }

}
