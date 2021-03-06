import { RedEntity } from './../entities/red.entity';
import { Injectable } from '@angular/core';
import { EntityState, StoreConfig, EntityStore, ActiveState } from "@datorama/akita";

export interface RedState extends EntityState<RedEntity>,ActiveState {


}
@Injectable({ providedIn: "root" })
@StoreConfig({ name: "redStore" })
export class RedStore extends EntityStore<RedState,RedEntity> {

}