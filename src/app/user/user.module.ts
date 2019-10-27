import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { UserRoutingModule } from "./user-routing.module";
import { ViewComponent } from "./view/view.component";
import { RedModule } from "../red/red.module";
import { ListRedComponent } from "./components/listRed.component";
import { MaterialModule } from "../global/global.module";

@NgModule({
  declarations: [ViewComponent, ListRedComponent],
  imports: [CommonModule, UserRoutingModule, RedModule, MaterialModule]
})
export class UserModule {}
