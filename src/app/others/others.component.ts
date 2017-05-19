import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-others',
    templateUrl: './others.component.html',
    styleUrls: ['./others.component.scss']
})
export class OthersComponent implements OnInit {

    links = ['algorithm','mytab'];

    constructor() {
    }

    ngOnInit() {
    }

}
