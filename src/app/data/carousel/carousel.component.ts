import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-carousel',
    templateUrl: './carousel.component.html',
    styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
    //todo 似乎很多bug；

    items = [1, 2, 3];

    constructor() {
    }

    ngOnInit() {
    }

}
