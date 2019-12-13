import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChildren,
  ViewContainerRef,
  ComponentFactoryResolver,
  ViewChild
} from "@angular/core";
import { NgTerminal, NgTerminalComponent } from "ng-terminal";

@Component({
  selector: "app-tabs",
  templateUrl: "./tabs.component.html",
  styleUrls: ["./tabs.component.scss"]
})
export class TabsComponent implements OnInit, AfterViewInit {
  
  componentRef: any;
  tabs: Array<any>;
  constructor(private resolver: ComponentFactoryResolver) {
    this.tabs = [];
  }
  ngAfterViewInit() {}
  ngOnInit() {}
  createNewConsole() {
    this.tabs.push({ name: "Nuevo" });
  }
}
