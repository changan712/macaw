import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CarouselComponent} from "./carousel/carousel.component";
import {DataComponent} from "./data.component";
import {DataGridComponent} from "./data-grid/data-grid.component";
import {DataTableComponent} from "./data-table/data-table.component";


const routes: Routes = [

    {
        path: '',
        component: DataComponent,
        children: [
            {
                path: '',
                redirectTo: 'carousel'
            },
            {
                path: 'carousel',
                component: CarouselComponent
            },
            {
                path: 'datagrid',
                component: DataGridComponent
            },
            {
                path: 'datatable',
                component: DataTableComponent
            }

        ]
    }


];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DataRoutingModule {
}
