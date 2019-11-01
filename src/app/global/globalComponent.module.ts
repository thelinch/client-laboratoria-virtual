import { HeaderComponent } from "./header/header.component";
import { NavComponent } from "./nav/nav.component";
import { NgModule } from "@angular/core";

@NgModule({
  declarations: [NavComponent, HeaderComponent],
  exports: [NavComponent, HeaderComponent]
})
export class GlobalComponentModule {}
