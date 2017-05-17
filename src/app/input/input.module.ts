import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {InputRoutingModule} from './input-routing.module';
import {AutoCompleteComponent} from './auto-complete/auto-complete.component';
import {InputComponent} from './input.component';
import {SharedModule} from "../shared/shared.module";
import {ChessComponent} from './chess/chess.component';
import {PanelModule} from "primeng/components/panel/panel";



@NgModule({
    imports: [
        SharedModule,
        InputRoutingModule,
        PanelModule
    ],
    declarations: [AutoCompleteComponent, InputComponent, ChessComponent,]
})
export class InputModule {
}
