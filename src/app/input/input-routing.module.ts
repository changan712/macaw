import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AutoCompleteComponent} from "./auto-complete/auto-complete.component";
import {InputComponent} from "./input.component";
import {CalendarComponent} from "./calendar/calendar.component";
import {CheckboxComponent} from "./checkbox/checkbox.component";
import {ChipsComponent} from "./chips/chips.component";
import {EditorComponent} from "./editor/editor.component";


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
            path: 'calendar',
            component: CalendarComponent,
        },
        {
            path: 'checkbox',
            component: CheckboxComponent,
        },
        {
            path: 'chips',
            component: ChipsComponent,
        },
        {
            path: 'editor',
            component: EditorComponent,
        }


    ]
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class InputRoutingModule {
}
