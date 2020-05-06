import {IonicModule} from '@ionic/angular';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Tab1Page} from './tab1.page';
import {ExploreContainerComponentModule} from '../explore-container/explore-container.module';

import {Tab1PageRoutingModule} from './tab1-routing.module';
import {UserComponent} from "../user/user.component";
import {UserService} from "../services/user.service";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        ExploreContainerComponentModule,
        Tab1PageRoutingModule,
        HttpClientModule
    ],
    declarations: [Tab1Page, UserComponent],
    providers: [UserService]
})
export class Tab1PageModule {
}
