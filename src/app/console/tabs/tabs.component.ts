import {
  Component,
  OnInit,
  AfterViewInit,
  ComponentFactoryResolver
} from "@angular/core";
import { SharedService } from "src/app/services/shared.service";

@Component({
  selector: "app-tabs",
  templateUrl: "./tabs.component.html",
  styleUrls: ["./tabs.component.scss"]
})
export class TabsComponent implements OnInit, AfterViewInit {
  componentRef: any;
  tabs: Array<any>;
  constructor(
    private resolver: ComponentFactoryResolver,
    private sharedService: SharedService
  ) {
    this.tabs = [];
  }
  ngAfterViewInit() {}
  ngOnInit() {
    this.sharedService.eventEmmiter.subscribe(e => {
      console.log("Nuevo Dispositive ", e);
    });
  }
  createNewConsole() {
    this.tabs.push({ name: "Nuevo" });
  }
}
