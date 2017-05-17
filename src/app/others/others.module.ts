import {NgModule} from '@angular/core';


import {OthersRoutingModule} from './others-routing.module';
import {AlgorithmComponent} from "./algorithm/algorithm.component";
import {SharedModule} from "../shared/shared.module";
import {OthersComponent} from "./others.component";

@NgModule({
    imports: [
        SharedModule,
        OthersRoutingModule
    ],
    declarations: [
        AlgorithmComponent,
        OthersComponent
    ]
})
export class OthersModule {
}
