import { TypeDispositive } from "./../dispositive/entities/TypeDispositive.entitie";
import { Injectable, EventEmitter } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class SharedService {
  eventEmmiter: EventEmitter<any>;
  constructor() {
    this.eventEmmiter = new EventEmitter();
  }
  sharedDispositive(item: any) {
    this.eventEmmiter.emit(item);
  }
}
