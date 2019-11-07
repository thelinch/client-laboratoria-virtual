import { Injectable } from "@angular/core";
import {
  EntityState,
  ActiveState,
  EntityStore,
  StoreConfig
} from "@datorama/akita";
import { TypeDispositive } from "../entities/TypeDispositive.entitie";
export interface TypeDispositiveState
  extends EntityState<TypeDispositive>,
    ActiveState {
  totalTransfer: number;
}

@Injectable({ providedIn: "root" })
@StoreConfig({ name: "typeDispositiveStore" })
export class TypeDispositiveStore extends EntityStore<
  TypeDispositiveState,
  TypeDispositive
> {
  constructor() {
    super({ totalTransfer: 0 });
  }
}
