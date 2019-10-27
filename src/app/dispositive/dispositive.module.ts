import { DispositiveService } from "./services/dispositive.service";
import { MaestroService } from "./services/maestro.service";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ListComponent } from "./list/list.component";
import { AddComponent } from "./add/add.component";
import { MaterialModule } from "../global/global.module";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [ListComponent, AddComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [ListComponent],
  providers: [MaestroService, DispositiveService],
  entryComponents: [AddComponent]
})
export class DispositiveModule {}
