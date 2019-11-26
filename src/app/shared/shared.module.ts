import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppHeaderComponent } from './layout/appHeader/appHeader.component';
import { OnlyNumbersDirective } from './directives/onlyNumbers.directive';

const angularModules = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  HttpClientModule,
  RouterModule
];

const declarations = [
  AppHeaderComponent,
  OnlyNumbersDirective,
];

@NgModule({
  imports: [
    ...angularModules,
  ],
  declarations: [
    ...declarations,
  ],
  exports: [
    ...angularModules,
    ...declarations,
  ],
  providers: [],
  entryComponents: [],
})
export class SharedModule { }
