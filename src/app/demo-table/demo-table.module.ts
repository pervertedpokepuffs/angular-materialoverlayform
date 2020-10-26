import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatTableModule } from '@angular/material/table'
import { OverlayModule } from '@angular/cdk/overlay';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'

import { MainComponent } from './main/main.component';
import { TableComponent } from './table/table.component';
import { OverlayFormComponent } from './overlay-form/overlay-form.component';

@NgModule({
  declarations: [
    MainComponent,
    TableComponent,
    OverlayFormComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    MatTableModule,
    OverlayModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatProgressSpinnerModule,
  ],
  providers: [],
  exports: [MainComponent]
})
export class DemoTableModule { }
