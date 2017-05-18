import { NgModule } from '@angular/core';


import { ButtonRoutingModule } from './button-routing.module';
import { SplitButonComponent } from './split-buton/split-buton.component';
import {SharedModule} from "../shared/shared.module";
import {SplitButtonModule} from "primeng/components/splitbutton/splitbutton";

@NgModule({
    imports: [
        SharedModule,
        SplitButtonModule,
        ButtonRoutingModule
    ],
    declarations: [SplitButonComponent]
})
export class ButtonModule { }
