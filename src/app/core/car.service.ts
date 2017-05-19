import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import {Observable} from "rxjs";

@Injectable()
export class CarService {

    constructor(private http: Http) {
    }


    public  getCarSmall(): Observable<any> {

        return this.http.get('assets/cars-small.json').map(res => {

            return res.json().data;
        })

    }
}
