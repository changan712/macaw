import {Component, OnInit} from '@angular/core';
import {AutoCompleteComponent} from "./auto-complete/auto-complete.component";


@Component({
    selector: 'app-input',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

    links = ['AutoComplete','chess','algorithm'];

    constructor() {
    }

    ngOnInit() {


    }

}
