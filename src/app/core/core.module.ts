import {NgModule, SkipSelf, Optional} from '@angular/core';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {StateService} from "./state.service";


@NgModule({
    imports: [BrowserAnimationsModule],
    providers:[
        StateService,
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
