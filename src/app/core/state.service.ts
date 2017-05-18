import {Injectable} from '@angular/core';
import {Subject} from "rxjs";
import {Message} from "primeng/components/common/api";

@Injectable()
export class StateService {

    message_ = new Subject();

    constructor() {
    }

    get message() {
        return this.message_;
    }

}
