import { Observable } from "rxjs";
import { QueryEntity } from "@datorama/akita";
import { RedEntity } from "./../entities/red.entity";
import { Injectable } from "@angular/core";
import { RedState, RedStore } from "../store/red.store";
import { RouterQuery } from "@datorama/akita-ng-router-store";
import { switchMap } from "rxjs/operators";
@Injectable({ providedIn: "root" })
export class RedQuery extends QueryEntity<RedState, RedEntity> {
  selectRed$: Observable<RedEntity> = this.routerQuery
    .selectParams("id")
    .pipe(switchMap(id => this.selectEntity(id)));
  constructor(protected redStore: RedStore, private routerQuery: RouterQuery) {
    super(redStore);
  }
}
