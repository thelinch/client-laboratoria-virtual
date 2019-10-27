import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ViewComponent } from "./view/view.component";
import { ListRedComponent } from "./components/listRed.component";

const routes: Routes = [
  {
    path: "",
    component: ViewComponent,
    children: [{ path: "list-red", component: ListRedComponent }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {}
