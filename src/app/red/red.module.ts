import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LienzoComponent } from "./lienzo/lienzo.component";
import { NewRedComponent } from "./new-red/new-red.component";
import { ListRedComponent } from "./list-red/list-red.component";

@NgModule({
  declarations: [LienzoComponent, NewRedComponent, ListRedComponent],
  imports: [CommonModule],
  exports: [NewRedComponent, ListRedComponent]
})
export class RedModule {}
