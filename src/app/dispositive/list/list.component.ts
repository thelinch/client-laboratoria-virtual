import { DispositiveService } from "./../services/dispositive.service";
import { Dispositive } from "./../entities/Dispositive.entitie";
import { Component, OnInit } from "@angular/core";
import { MatDialog, MAT_DIALOG_DEFAULT_OPTIONS } from "@angular/material";
import { AddComponent } from "../add/add.component";
import { $animations } from "../add/add-animations";
import { Observable } from "rxjs";
import { DispositiveQuery } from "../query/dispositive.query";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"]
})
export class ListComponent implements OnInit {
  dispositives$: Observable<Dispositive[]>;
  constructor(
    public dialog: MatDialog,
    private dispositiveQuery: DispositiveQuery,
    private dispositiveService: DispositiveService
  ) {
    this.dispositiveService.all().subscribe();
    this.dispositives$ = dispositiveQuery.selectAll();
  }

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
