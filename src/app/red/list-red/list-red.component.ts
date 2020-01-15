import { Router } from "@angular/router";
import { Observable, Subscription } from "rxjs";
import { RedEntity } from "./../entities/red.entity";
import { Component, OnInit, OnDestroy } from "@angular/core";
import { MatDialog } from "@angular/material";
import { AddComponent } from "../add/add.component";
import { RedService } from "../services/red.service";
import { RedQuery } from "../query/red.query";

@Component({
  selector: "app-list-red",
  templateUrl: "./list-red.component.html",
  styleUrls: ["./list-red.component.scss"]
})
export class ListRedComponent implements OnInit, OnDestroy {
  ngOnDestroy(): void {
    this.listSubscription.forEach(s => {
      s.unsubscribe();
    });
  }
  listRed$: Observable<RedEntity[]>;
  private listSubscription: Subscription[] = [];
  constructor(
    public dialog: MatDialog,
    private redService: RedService,
    private redQuery: RedQuery,
    private route: Router
  ) {}

  ngOnInit() {
    let subscription = this.redService.all().subscribe();
    this.listRed$ = this.redQuery.selectAll();
    this.listSubscription.push(subscription);
  }
  openModalCreate() {
    this.dialog.open(AddComponent, { data: null });
  }
  editRed(idRed: number) {
    let subscription = this.redService
      .getDispositivesAndActiveRed(idRed)
      .subscribe(() => {
        this.route.navigateByUrl("/admin/new-red/" + idRed);
      });
    this.listSubscription.push(subscription);
  }
  /*
  
  */

  redirect(idRed: number) {
    let subscription = this.redService
      .getDispositivesAndActiveRed(idRed)
      .subscribe(() => {
        this.route.navigateByUrl("/user/red/" + idRed);
      });
    this.listSubscription.push(subscription);
  }
}
