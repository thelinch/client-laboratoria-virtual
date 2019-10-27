import { Component, OnInit } from "@angular/core";
import { MatDialog, MAT_DIALOG_DEFAULT_OPTIONS } from "@angular/material";
import { AddComponent } from "../add/add.component";
import { $animations } from "../add/add-animations";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"]
})
export class ListComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit() {}
  openDialog(): void {
    const dialogRef = this.dialog.open(AddComponent, {
      width: "100%",
      data: "Pc",
      direction: "ltr",
      position: { right: "20px" }
    });
  }
}
