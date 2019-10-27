import { Injectable } from '@angular/core';
import { Dispositive } from "./../entities/Dispositive.entitie";
import { QueryEntity } from "@datorama/akita";
import { DispositiveState, DispositiveStore } from "../store/dispositive.store";
@Injectable({ providedIn: "root" })
export class DispositiveQuery extends QueryEntity<
  DispositiveState,
  Dispositive
> {
  constructor(protected dispositiveStore: DispositiveStore) {
    super(dispositiveStore);
  }
}
