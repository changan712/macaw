import {Component, OnInit, ViewChild} from '@angular/core';
import {CarService} from "../../../core/car.service";
import {StateService} from "../../../core/state.service";

@Component({
    selector: 'app-data-table-templating',
    templateUrl: './data-table-templating.component.html',
    styleUrls: ['./data-table-templating.component.scss']
})
export class DataTableTemplatingComponent implements OnInit {

    cars = [];


    constructor(private  carSv: CarService, private state: StateService) {

    }


    ngOnInit() {

        this.carSv.getCarSmall().subscribe(data => {
            this.cars = data;
        })
    }


    selectCar(car) {
        this.state.message.next({severity: 'info', summary: 'Car Select', detail: 'Vin: ' + car.vin})
    }

}
