import { QueryEntity } from "@datorama/akita";
import { RedEntity } from "./../entities/red.entity";
import { Injectable } from "@angular/core";
import { RedState, RedStore } from "../store/red.store";
@Injectable({ providedIn: "root" })
export class RedQuery extends QueryEntity<RedState, RedEntity> {
  // selectRed$: Observable<RedEntity> = this.routerQuery
  //   .selectParams("id")
  //   .pipe(switchMap(id => this.selectEntity(id)));
  constructor(protected redStore: RedStore) {
    super(redStore);
  }
}
