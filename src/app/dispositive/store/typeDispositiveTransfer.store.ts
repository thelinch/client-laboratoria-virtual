import {
  EntityState,
  StoreConfig,
  EntityStore,
  ActiveState
} from "@datorama/akita";
import { TypeDispositiveTransfer } from "../entities/TypeDispositiveTransfer.entitie";
import { Injectable } from "@angular/core";
export interface TypeDispositiveTransferState
  extends EntityState<TypeDispositiveTransfer>,
    ActiveState {}

@Injectable({ providedIn: "root" })
@StoreConfig({ name: "typeDispositiveTransferStore", resettable: true })
export class TypeDispositiveTransferStore extends EntityStore<
  TypeDispositiveTransferState,
  TypeDispositiveTransfer
> {
  constructor() {
    super();
  }
}
