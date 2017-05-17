import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FormsModule} from '@angular/forms';

import {ButtonModule} from "primeng/components/button/button";
import {TabViewModule} from "primeng/components/tabview/tabview";


@NgModule({
    imports: [
        CommonModule
    ],


    exports: [
        CommonModule,
        FormsModule,
        TabViewModule,
        ButtonModule,

    ],
    declarations: []
})
export class SharedModule {


}
