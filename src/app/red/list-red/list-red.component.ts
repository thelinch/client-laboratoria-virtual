import { Observable } from "rxjs";
import { RedEntity } from "./../entities/red.entity";
import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material";
import { AddComponent } from "../add/add.component";
import { RedService } from "../services/red.service";
import { RedQuery } from "../query/red.query";

@Component({
  selector: "app-list-red",
  templateUrl: "./list-red.component.html",
  styleUrls: ["./list-red.component.scss"]
})
export class ListRedComponent implements OnInit {
  listRed$: Observable<RedEntity[]>;
  constructor(
    public dialog: MatDialog,
    private redService: RedService,
    private redQuery: RedQuery
  ) {}

  ngOnInit() {
    this.redService.all().subscribe();
    this.listRed$ = this.redQuery.selectAll();
  }
  openModalCreate() {
    this.dialog.open(AddComponent, { data: null });
  }
  editRed() {}
}
