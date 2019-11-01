import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material";
import { AddComponent } from "../add/add.component";

@Component({
  selector: "app-list-red",
  templateUrl: "./list-red.component.html",
  styleUrls: ["./list-red.component.scss"]
})
export class ListRedComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit() {}
  openModalCreate() {
    this.dialog.open(AddComponent, { data: null });
  }
  editRed() {}
}
