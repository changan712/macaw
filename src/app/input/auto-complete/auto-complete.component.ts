import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-auto-complete',
    templateUrl: './auto-complete.component.html',
    styleUrls: ['./auto-complete.component.scss']
})
export class AutoCompleteComponent implements OnInit {

    countries = [];
    countries2 = [];

    constructor() {
    }

    ngOnInit() {
    }

    search(e) {

        this.countries = ['china', 'america', 'japan', 'russia'].filter((item) => item.indexOf(e.query) > -1)

    }

    search2(e) {

        this.countries2 = [
            {
                label: 'china',
                id: 1,
            },
            {
                label: 'america',
                id: 2
            },

            {
                label: 'japan',
                id: 3
            },
            {
                label: 'russia',
                id: 4
            }
        ].filter((item) => {
            return item.label.indexOf(e.query) > -1;
        })

    }

}
