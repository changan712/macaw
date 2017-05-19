import {Component, OnInit} from '@angular/core';
import {CarService} from "../../../core/car.service";


@Component({
    selector: 'app-data-table-basic',
    templateUrl: './data-table-basic.component.html',
    styleUrls: ['./data-table-basic.component.scss']
})
export class DataTableBasicComponent implements OnInit {

    cars = [];


    cols = [
        {field: 'vin', header: 'Vin'},
        {field: 'year', header: 'Year'},
        {field: 'brand', header: 'Brand'},
        {field: 'color', header: 'Color'}
    ];



    constructor(private  carSv: CarService) {
    }

    ngOnInit() {

        this.carSv.getCarSmall().subscribe(res => {
            this.cars = res;
        });


    }
}
