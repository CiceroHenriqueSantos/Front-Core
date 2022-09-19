import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SnackBarComponent } from './shared/snack-bar/snack-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppMaterialModule } from './shared/configs/material.module';
import { FormGroupDirective, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfirmationDialogComponent } from './shared/components/confirmation-dialog/confirmation-dialog.component';
import { DialogService } from './shared/dialog-result/dialog.service';
import { TextMaskModule } from 'angular2-text-mask';
import { NgBrazil } from 'ng-brazil';
import { NavflowComponent } from './shared/components/navflow/navflow.component';

@NgModule({
  declarations: [
    AppComponent,
    SnackBarComponent,
    ConfirmationDialogComponent,
    NavflowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    NgBrazil,
    TextMaskModule
    
  ],
  providers: [
    DialogService,
    FormGroupDirective
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
