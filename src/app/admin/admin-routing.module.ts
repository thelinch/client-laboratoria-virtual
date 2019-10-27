import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ViewComponent } from "./view/view.component";
import { ListDispositiveComponent } from "./components/listDispositive.component";
import { RedComponent } from "./components/red.component";
import { ListRedComponent } from "./components/listRed.component";

const routes: Routes = [
  {
    path: "",
    component: ViewComponent,
    children: [
      {
        path: "dispositive",
        component: ListDispositiveComponent
      },
      { path: "new-red", component: RedComponent },
      { path: "list-red", component: ListRedComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
