import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [

    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'input'

    },
    {
        path: 'input',
        loadChildren: 'app/input/input.module#InputModule'

    },
    {
        path: 'button',
        loadChildren: 'app/button/button.module#ButtonModule'

    },
    {
        path: 'data',
        loadChildren: 'app/data/data.module#DataModule'

    },
    {
        path: 'others',
        loadChildren: 'app/others/others.module#OthersModule'

    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
