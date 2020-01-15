import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AdminRoutingModule } from "./admin-routing.module";
import { ViewComponent } from "./view/view.component";
import { ListDispositiveComponent } from "./components/listDispositive.component";
import { RedComponent } from "./components/red.component";
import { RedModule } from "../red/red.module";
import { ListRedComponent } from "./components/listRed.component";
import { GlobalComponentModule } from "../global/globalComponent.module";

@NgModule({
  declarations: [
    ViewComponent,
    ListDispositiveComponent,
    RedComponent,
    ListRedComponent
  ],
  imports: [CommonModule, GlobalComponentModule, AdminRoutingModule, RedModule],
  exports: [ViewComponent]
})
export class AdminModule {}
