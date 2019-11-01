import { ConsoleModule } from "./../console/console.module";
import { DispositiveModule } from "./../dispositive/dispositive.module";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { UserRoutingModule } from "./user-routing.module";
import { ViewComponent } from "./view/view.component";
import { RedModule } from "../red/red.module";
import { ListRedComponent } from "./components/listRed.component";
import { MaterialModule } from "../global/global.module";
import { RedComponent } from "./red/red.component";
import { GlobalComponentModule } from '../global/globalComponent.module';

@NgModule({
  declarations: [ViewComponent, ListRedComponent, RedComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    RedModule,
    DispositiveModule,
    ConsoleModule,
    GlobalComponentModule
  ]
})
export class UserModule {}
