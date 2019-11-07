import { TypeDispositiveTransfer } from "./../entities/TypeDispositiveTransfer.entitie";
import {
  TypeDispositiveTransferState,
  TypeDispositiveTransferStore
} from "./../store/typeDispositiveTransfer.store";
import { Injectable } from "@angular/core";
import { QueryEntity, ID } from "@datorama/akita";
@Injectable({ providedIn: "root" })
export class TypeDispositiveTransferQuery extends QueryEntity<
  TypeDispositiveTransferState,
  TypeDispositiveTransfer
> {
  constructor(
    private typeDispositiveTransferStore: TypeDispositiveTransferStore
  ) {
    super(typeDispositiveTransferStore);
  }
}
