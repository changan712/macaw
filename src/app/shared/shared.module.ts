import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FormsModule} from '@angular/forms';

import {ButtonModule} from "primeng/components/button/button";
import {TabViewModule} from "primeng/components/tabview/tabview";
import {PanelModule} from "primeng/components/panel/panel";


@NgModule({
    imports: [
        CommonModule
    ],


    exports: [
        CommonModule,
        FormsModule,
        TabViewModule,
        ButtonModule,
        PanelModule,

    ],
    declarations: []
})
export class SharedModule {


}
