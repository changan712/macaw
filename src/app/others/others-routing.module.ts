import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {OthersComponent} from "./others.component";
import {AlgorithmComponent} from "./algorithm/algorithm.component";
import {MyTabDemoComponent} from "./my-tab/my-tab-demo.component";




const routes: Routes = [
    {
        path: '',
        component: OthersComponent,
        children: [
            {
                path: '',
                redirectTo: 'algorithm',
            },
            {
                path: 'algorithm',
                component: AlgorithmComponent
            },
            {
                path: 'mytab',
                component: MyTabDemoComponent
            }
        ]
    }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class OthersRoutingModule {
}
