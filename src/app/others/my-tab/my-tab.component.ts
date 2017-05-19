import {
    Component, OnInit, Input, ContentChildren, QueryList, AfterContentChecked,
    AfterContentInit
} from '@angular/core';
import {MyTabItemComponent} from "./my-tab-item.component";

@Component({
    selector: 'app-my-tab',
    templateUrl: './my-tab.component.html',
    styleUrls: ['./my-tab.component.scss']
})
export class MyTabComponent implements AfterContentInit {

    @ContentChildren(MyTabItemComponent) tabs: QueryList<MyTabItemComponent>;

    selectedTab: MyTabItemComponent;


    constructor() {
    }

    onSelect(tab) {
        this.selectTab(tab);
    }

    selectTab(tab) {
        this.tabs.forEach(item => {
            item.show = false;
        });
        this.selectedTab = tab;
        this.selectedTab.show = true;
    }


    ngAfterContentInit(): void {
        this.selectTab(this.tabs.first);
    }


}

