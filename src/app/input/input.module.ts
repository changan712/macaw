import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputRoutingModule } from './input-routing.module';
import { AutoCompleteComponent } from './auto-complete/auto-complete.component';
import { InputComponent } from './input.component';
import {SharedModule} from "../shared/shared.module";


@NgModule({
  imports: [
    SharedModule,
    InputRoutingModule
  ],
  declarations: [AutoCompleteComponent, InputComponent, ]
})
export class InputModule { }
