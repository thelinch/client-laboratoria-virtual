import { Injectable } from "@angular/core";
import { TypeDispositiveTransferStore } from "../store/typeDispositiveTransfer.store";
import { ID, transaction } from "@datorama/akita";
import { TypeDispositiveTransfer } from "../entities/TypeDispositiveTransfer.entitie";

@Injectable({
  providedIn: "root"
})
export class TypeDispositiveTransferService {
  constructor(
    private typeDispositiveTransferStore: TypeDispositiveTransferStore
  ) {}
  setAll(listDipositiveTransfer: Array<TypeDispositiveTransfer>) {
    this.typeDispositiveTransferStore.set(listDipositiveTransfer);
  }

}
