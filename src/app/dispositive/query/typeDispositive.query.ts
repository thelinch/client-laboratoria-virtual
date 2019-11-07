import {
  TypeDispositiveState,
  TypeDispositiveStore
} from "./../store/typeDispositive.store";
import { QueryEntity } from "@datorama/akita";
import { Injectable } from "@angular/core";
import { TypeDispositive } from "../entities/TypeDispositive.entitie";
@Injectable({ providedIn: "root" })
export class TypeDispositiveQuery extends QueryEntity<
  TypeDispositiveState,
  TypeDispositive
> {
  constructor(protected typeDispositiveStore: TypeDispositiveStore) {
    super(typeDispositiveStore);
  }
}
