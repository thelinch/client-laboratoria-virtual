import { MaterialModule } from "./../global/global.module";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NewConsoleComponent } from "./new/new.component";
import { NgTerminalModule, NgTerminalComponent } from "ng-terminal";
import { TabsComponent } from "./tabs/tabs.component";
import { SocketIoModule, SocketIoConfig } from "ngx-socket-io";

const config: SocketIoConfig = { url: "http://localhost:3000", options: {} };
@NgModule({
  declarations: [NewConsoleComponent, TabsComponent],
  imports: [
    CommonModule,
    NgTerminalModule,
    MaterialModule,
    SocketIoModule.forRoot(config)
  ],
  exports: [TabsComponent],
  entryComponents: [NgTerminalComponent]
})
export class ConsoleModule {}
