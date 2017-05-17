import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AutoCompleteComponent} from "./auto-complete/auto-complete.component";
import {InputComponent} from "./input.component";

const routes: Routes = [{
    path: '',
    component: InputComponent,
    children: [
        {
            path: '',
            redirectTo:'autocomplete'
        },
        {
            path: 'autocomplete',
            component: AutoCompleteComponent,
        }


    ]
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class InputRoutingModule {
}
