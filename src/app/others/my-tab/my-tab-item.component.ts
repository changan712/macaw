import {Input, OnInit, Component} from "@angular/core";
@Component({
    selector: 'app-my-tab-item',
    templateUrl: './my-tab-item.component.html',
    styleUrls: ['./my-tab-item.component.scss']
})


export class MyTabItemComponent implements OnInit {

    @Input() tabTitle: string;

    show: boolean = false;

    ngOnInit(): void {
    }


}

