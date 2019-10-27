import { Injectable } from '@angular/core';
import { EntityState, StoreConfig, EntityStore, ActiveState } from "@datorama/akita";
import { Dispositive } from "../entities/Dispositive.entitie";

export interface DispositiveState extends EntityState<Dispositive>,ActiveState {}
@Injectable({ providedIn: "root" })
@StoreConfig({ name: "dispositiveStore" })
export class DispositiveStore extends EntityStore<DispositiveState,Dispositive> {
  constructor() {
    super();
  }
}
