import {NgModule} from '@angular/core';


import {OthersRoutingModule} from './others-routing.module';
import {AlgorithmComponent} from "./algorithm/algorithm.component";
import {SharedModule} from "../shared/shared.module";
import {OthersComponent} from "./others.component";
import {MyTabComponent} from "./my-tab/my-tab.component";

import {MyTabDemoComponent} from "./my-tab/my-tab-demo.component";
import {MyTabItemComponent} from "./my-tab/my-tab-item.component";


@NgModule({
    imports: [
        SharedModule,
        OthersRoutingModule
    ],
    declarations: [
        AlgorithmComponent,
        OthersComponent,
        MyTabComponent,
        MyTabItemComponent,
        MyTabDemoComponent
    ]
})
export class OthersModule {
}
