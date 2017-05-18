import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SplitButonComponent} from "./split-buton/split-buton.component";

const routes: Routes = [
    {
        path: '',
        component: SplitButonComponent
    }


];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ButtonRoutingModule {
}
