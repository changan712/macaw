import {Component, OnInit} from '@angular/core';
import {Messages} from "primeng/components/messages/messages";
import {StateService} from "./core/state.service";


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

    list = ['input', 'button', 'others'];


    msgs: Messages[] = [];

    constructor(public  state: StateService) {



    }
    ngOnInit(): void {

        this.state.message.subscribe((res: Messages) => {
            //todo 此处要从新set一次 this.msg 才能触发growl 内部的set changeHdl 逻辑,才能之后自动消失；
            this.msgs = [];
            this.msgs.push(res);
            
            console.log(res);
            
        })
    }


}

