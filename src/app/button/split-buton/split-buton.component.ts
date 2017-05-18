import {Component, OnInit} from '@angular/core';
import {MenuItem, Message} from "primeng/components/common/api";
import {StateService} from "../../core/state.service";

@Component({
    selector: 'app-split-buton',
    templateUrl: './split-buton.component.html',
    styleUrls: ['./split-buton.component.scss']
})
export class SplitButonComponent implements OnInit {

    items: MenuItem = [];


    constructor(private state: StateService) {
    }

    ngOnInit() {
        this.items = [
            {
                label: 'Update', icon: 'fa-refresh', command: () => {
                this.update();
            }
            },
            {
                label: 'Delete', icon: 'fa-close', command: () => {
                this.delete();
            }
            },
            {label: 'Angular.io', icon: 'fa-link', url: 'http://angular.io'},
            {label: 'Theming', icon: 'fa-paint-brush', routerLink: ['/input']}
        ];
    }


    save() {
        
        this.state.message.next({severity: 'info', summary: 'Success', detail: 'Data Saved'});
    }

    update() {
        console.log(2);
        
        this.state.message.next({severity: 'success', summary: 'Success', detail: 'Data Updated'});
    }

    delete() {

        this.state.message.next({severity: 'error',detail: 'Data Deleted'});
    }
}
