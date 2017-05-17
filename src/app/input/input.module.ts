import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {InputRoutingModule} from './input-routing.module';
import {AutoCompleteComponent} from './auto-complete/auto-complete.component';
import {InputComponent} from './input.component';
import {SharedModule} from "../shared/shared.module";

import {AutoCompleteModule} from "primeng/components/autocomplete/autocomplete";

import { CalendarComponent } from './calendar/calendar.component';
import {CalendarModule} from "primeng/components/calendar/calendar";
import { CheckboxComponent } from './checkbox/checkbox.component';
import {CheckboxModule} from "primeng/components/checkbox/checkbox";
import { ChipsComponent } from './chips/chips.component';
import {ChipsModule} from "primeng/components/chips/chips";


@NgModule({
    imports: [
        SharedModule,
        InputRoutingModule,
        AutoCompleteModule,
        CalendarModule,
        CheckboxModule,
        ChipsModule,

    ],
    declarations: [AutoCompleteComponent, InputComponent,  CalendarComponent, CheckboxComponent, ChipsComponent,]
})
export class InputModule {
}
