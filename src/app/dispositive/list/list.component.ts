import { SharedService } from "./../../services/shared.service";
import { Observable } from "rxjs";

import { Component, OnInit, Input } from "@angular/core";
import { MatDialog } from "@angular/material";
import { AddComponent } from "../add/add.component";
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem
} from "@angular/cdk/drag-drop";
import { TypeDispositive } from "../entities/TypeDispositive.entitie";
import { TypeDispositiveService } from "../services/type-dispositive.service";
import { TypeDispositiveQuery } from "../query/typeDispositive.query";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"]
})
export class ListComponent implements OnInit {
  listTypeDispositive$: Observable<TypeDispositive[]>;
  constructor(
    public dialog: MatDialog,
    private typeDispositiveService: TypeDispositiveService,
    private typeDispositiveQuery: TypeDispositiveQuery,
    private sharedService: SharedService
  ) {}

  ngOnInit() {
    this.typeDispositiveService.get().subscribe();
    this.listTypeDispositive$ = this.typeDispositiveQuery.selectAll();
    this.listTypeDispositive$.subscribe(console.log);
    this.sharedService.eventEmmiter.subscribe(dispositiveWithRed => {
      console.log(dispositiveWithRed);
      const dialogRef = this.dialog.open(AddComponent, {
        width: "100%",
        data: dispositiveWithRed,
        direction: "ltr",
        position: { right: "20px" }
      });
    });
  }

  openDialog(option: string): void {
    const dialogRef = this.dialog.open(AddComponent, {
      width: "100%",
      data: option,
      direction: "ltr",
      position: { right: "20px" }
    });
  }
  drop(event: any) {
    console.log("se hizo drop");
    this.typeDispositiveService.selectTransferType(
      event.distance,
      event.container.data[event.currentIndex].id
    );
  }
  /*drop(event: CdkDragDrop<string[]>) {
    //this.sharedService.drop(this.listItems[event.previousIndex]);
    /* if (event.container.id === event.previousContainer.id) {
      moveItemInArray(this.listItems, event.previousIndex, event.currentIndex);
    } else {
      console.log("entro al else");
      this.sharedService.drop(event);
    }
  }*/
}
