import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AutoCompleteComponent} from "./auto-complete/auto-complete.component";
import {InputComponent} from "./input.component";
import {ChessComponent} from "./chess/chess.component";

const routes: Routes = [{
    path: '',
    component: InputComponent,
    children: [
        {
            path: '',
            redirectTo: 'autocomplete'
        },
        {
            path: 'autocomplete',
            component: AutoCompleteComponent,
        }, {
            path: 'chess',
            component: ChessComponent,
        }


    ]
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class InputRoutingModule {
}
