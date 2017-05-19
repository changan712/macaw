import {Component, OnInit} from '@angular/core';
import {CarService} from "../../../core/car.service";

@Component({
    selector: 'app-data-table-facets',
    templateUrl: './data-table-facets.component.html',
    styleUrls: ['./data-table-facets.component.scss']
})
export class DataTableFacetsComponent implements OnInit {

    cars = [];

    constructor(private carSv: CarService) {
    }

    ngOnInit() {
        console.log(2);
        
        this.carSv.getCarSmall().subscribe(data => {
            this.cars = data;
        })
    }


}
