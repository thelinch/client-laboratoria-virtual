import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ViewComponent } from "./view/view.component";
import { ListRedComponent } from "./components/listRed.component";
import { RedComponent } from "./red/red.component";

const routes: Routes = [
  {
    path: "",
    component: ViewComponent,
    children: [
      { path: "list-red", component: ListRedComponent },
      { path: "red/:id", component: RedComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {}
