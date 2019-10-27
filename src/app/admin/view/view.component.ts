import { Component, OnInit } from "@angular/core";
import { functionsGlobal } from "src/app/global/funciontsGlobal";

@Component({
  selector: "app-view",
  templateUrl: "./view.component.html",
  styleUrls: ["./view.component.scss"]
})
export class ViewComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    functionsGlobal.iniciarSideNav();
  }
}
