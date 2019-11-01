import { Component, OnInit } from "@angular/core";
import { RedQuery } from "../query/red.query";

@Component({
  selector: "app-new-red",
  templateUrl: "./new-red.component.html",
  styleUrls: ["./new-red.component.scss"]
})
export class NewRedComponent implements OnInit {
  redSelected$ = this.redQuery.selectRed$;
  constructor(private redQuery: RedQuery) {
    
  }

  ngOnInit() {}
}
