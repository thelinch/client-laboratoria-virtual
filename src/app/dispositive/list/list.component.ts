import { SharedService } from "./../../services/shared.service";
import { DispositiveService } from "./../services/dispositive.service";
import { Dispositive } from "./../entities/Dispositive.entitie";
import { Component, OnInit, Input } from "@angular/core";
import { MatDialog } from "@angular/material";
import { AddComponent } from "../add/add.component";
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem
} from "@angular/cdk/drag-drop";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"]
})
export class ListComponent implements OnInit {
  listItems: Array<any>;
  constructor(public dialog: MatDialog, private sharedService: SharedService) {
    this.listItems = [
      { id: "Pc", asset: "assets/dispositivos/pc.png" },
      { id: "Switch", asset: "assets/dispositivos/switch.png" },
      { id: "Router", asset: "assets/dispositivos/router.png" }
    ];
  }

  ngOnInit() {}
  openDialog(option: string): void {
    const dialogRef = this.dialog.open(AddComponent, {
      width: "100%",
      data: option,
      direction: "ltr",
      position: { right: "20px" }
    });
  }
  drop(event: CdkDragDrop<string[]>) {
    this.sharedService.drop(this.listItems[event.previousIndex]);
    /* if (event.container.id === event.previousContainer.id) {
      moveItemInArray(this.listItems, event.previousIndex, event.currentIndex);
    } else {
      console.log("entro al else");
      this.sharedService.drop(event);
    }*/
  }
}
