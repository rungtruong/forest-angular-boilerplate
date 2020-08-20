import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UikitRoutingModule } from './uikit-routing.module';
import { StylInputComponent } from './styl-input/styl-input.component';
import { AntDesignModule } from '../ant-design/ant-design.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [StylInputComponent],
  imports: [
    CommonModule,
    UikitRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AntDesignModule

  ],
  exports: [
    StylInputComponent
  ]
})
export class UikitModule { }
