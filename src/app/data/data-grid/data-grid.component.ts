import {Component, OnInit} from '@angular/core';
import  * as _ from 'lodash';

@Component({
    selector: 'app-data-grid',
    templateUrl: './data-grid.component.html',
    styleUrls: ['./data-grid.component.scss']
})
export class DataGridComponent implements OnInit {

    list = [];

    _list = [
        {
            id: 1,
            label: 'china'

        }, {
            id: 2,
            label: 'america'

        }, {
            id: 3,
            label: 'italy'

        }, {
            id: 4,
            label: 'france'

        }, {
            id: 5,
            label: 'england'

        }, {
            id: 6,
            label: 'german'

        }, {
            id: 7,
            label: 'spain'

        }, {
            id: 8,
            label: 'norway'

        }, {
            id: 9,
            label: 'poland'

        },
    ];

    constructor() {
    }

    ngOnInit() {

    }


    loadData(e) {
        let page = e.first / e.rows + 1;
        let listCopy = _.cloneDeep(this._list);
        listCopy.map(item=>{
            item.label = item.label+page
        });

        this.list = listCopy;

    }
}
