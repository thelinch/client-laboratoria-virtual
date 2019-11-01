import { RedService } from "./services/red.service";
import { HttpClientModule } from "@angular/common/http";
import { MaterialModule } from "./../global/global.module";
import { ReactiveFormsModule } from "@angular/forms";
import { DispositiveModule } from "./../dispositive/dispositive.module";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LienzoComponent } from "./lienzo/lienzo.component";
import { NewRedComponent } from "./new-red/new-red.component";
import { ListRedComponent } from "./list-red/list-red.component";
import { AddComponent } from "./add/add.component";

@NgModule({
  declarations: [
    LienzoComponent,
    NewRedComponent,
    ListRedComponent,
    AddComponent
  ],
  imports: [
    CommonModule,
    DispositiveModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [RedService],
  entryComponents: [AddComponent],
  exports: [NewRedComponent, ListRedComponent, LienzoComponent]
})
export class RedModule {}
