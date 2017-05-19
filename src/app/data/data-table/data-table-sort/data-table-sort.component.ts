import {Component, OnInit} from '@angular/core';
import {CarService} from "../../../core/car.service";
import {LazyLoadEvent} from "primeng/components/common/api";
import {Router} from "@angular/router";

@Component({
    selector: 'app-data-table-sort',
    templateUrl: './data-table-sort.component.html',
    styleUrls: ['./data-table-sort.component.scss']
})
export class DataTableSortComponent implements OnInit {

    cars1: any[];

    cars2: any[];

    datasource: any[];

    totalRecords1: number;

    constructor(private carService: CarService,private router:Router) {
    }

    onSort(e) {
        console.log(e);
        return false;
    }

    loadCarsLazy(e: LazyLoadEvent) {
        setTimeout(() => {
            if (this.datasource) {
                this.cars1 = this.datasource.slice(e.first, (e.first + e.rows));
            }
        }, 250);
    }

    onpage(e){
            console.log(e);
            
            this.router.navigate([],{
                queryParams:{
                    page:e.first
                }
            })
    }
    
    ngOnInit() {
        this.carService.getCarSmall().subscribe(data => {
            this.datasource = data;
            this.cars1 = this.datasource.slice(0, 10);
            this.totalRecords1 = this.cars1.length;
        });
        this.carService.getCarSmall().subscribe(data => {
            this.cars2 = data;
        })
    }

}
