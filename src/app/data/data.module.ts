import {NgModule} from '@angular/core';


import {DataRoutingModule} from './data-routing.module';
import {DataComponent} from './data.component';
import {CarouselComponent} from './carousel/carousel.component';
import {SharedModule} from "../shared/shared.module";
import {CarouselModule} from "primeng/components/carousel/carousel";
import {DataGridComponent} from './data-grid/data-grid.component';
import {DataGridModule} from "primeng/components/datagrid/datagrid";


import {DataTableComponent} from './data-table/data-table.component';
import {DataTableModule} from "primeng/components/datatable/datatable";
import { DataTableBasicComponent } from './data-table/data-table-basic/data-table-basic.component';
import { DataTableFacetsComponent } from './data-table/data-table-facets/data-table-facets.component';
import { DataTableTemplatingComponent } from './data-table/data-table-templating/data-table-templating.component';
import { DataTableColGroupComponent } from './data-table/data-table-col-group/data-table-col-group.component';
import { DataTableSortComponent } from './data-table/data-table-sort/data-table-sort.component';
import { DataTableFilterComponent } from './data-table/data-table-filter/data-table-filter.component';

@NgModule({
    imports: [
        SharedModule,
        DataRoutingModule,
        CarouselModule,
        DataGridModule,
        DataTableModule,
    ],
    declarations: [DataComponent, CarouselComponent, DataGridComponent, DataTableComponent, DataTableBasicComponent, DataTableFacetsComponent, DataTableTemplatingComponent, DataTableColGroupComponent, DataTableSortComponent, DataTableFilterComponent]
})
export class DataModule {
}
