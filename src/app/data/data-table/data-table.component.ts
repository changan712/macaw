import {Component, OnInit} from '@angular/core';

import {Router, ActivatedRoute} from "@angular/router";

@Component({
    selector: 'app-data-table',
    templateUrl: './data-table.component.html',
    styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {

    activeIndex: string|number = 0;

    constructor(private aRoute: ActivatedRoute, private router: Router) {
    }

    ngOnInit() {

        this.aRoute.fragment.subscribe((value) => {
            this.activeIndex = value;
        })
    }

    tabChange(e) {
        let index = e.index;
        this.router.navigate([], {
            fragment: index.toString()
        })

    }

}
