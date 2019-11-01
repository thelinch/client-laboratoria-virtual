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
  @ViewChild("templateTerminal", { read: ViewContainerRef, static: true })
  entry: ViewContainerRef;
  componentRef: any;
  tabs: Array<any>;
  constructor(private resolver: ComponentFactoryResolver) {
    this.tabs = [];
  }
  ngAfterViewInit() {}
  ngOnInit() {}
  createNewConsole() {
    this.entry.clear();
    const factory = this.resolver.resolveComponentFactory(NgTerminalComponent);
    console.log(factory, this.entry);
    this.componentRef = this.entry.createComponent(factory);
    console.log(this.componentRef.instance.dataSource);
    this.componentRef.instance.keyEventInput.subscribe(e => {
      const ev = e.domEvent;
      const printable = !ev.altKey && !ev.ctrlKey && !ev.metaKey;
      if (ev.keyCode === 13) {
        this.componentRef.instance.write("\r\n$ ");
      } else if (ev.keyCode === 8) {
        // Do not delete the prompt
        if (this.componentRef.instance.underlying.buffer.cursorX > 2) {
          this.componentRef.instance.write("\b \b");
        }
      } else if (printable) {
        this.componentRef.instance.write(e.key);
      }
    });
    this.tabs.push({ name: "Nuevo" });
  }
}
