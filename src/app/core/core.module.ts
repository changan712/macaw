import {NgModule, SkipSelf, Optional} from '@angular/core';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {StateService} from "./state.service";
import {CarService} from "./car.service";
import {HttpModule} from "@angular/http";


@NgModule({
    imports: [
        HttpModule,
        BrowserAnimationsModule

    ],
    providers: [
        StateService,
        CarService,

    ],
    declarations: []
})
export class CoreModule {
    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
        if (parentModule) {
            throw new Error(
                'CoreModule is already loaded. Import it in the AppModule only');
        }
    }
}
