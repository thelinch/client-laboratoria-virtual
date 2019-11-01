import { Component, OnInit, ViewChild, AfterViewInit } from "@angular/core";
import { NgTerminal } from "ng-terminal";

@Component({
  selector: "new-console",
  templateUrl: "./new.component.html",
  styleUrls: ["./new.component.scss"]
})
export class NewConsoleComponent implements OnInit, AfterViewInit {
  @ViewChild("term", { static: true }) child: NgTerminal;
  constructor() {}

  ngOnInit() {}
  ngAfterViewInit() {
    this.child.keyEventInput;
  }
  init() {}
  sendComand() {}
}
