import { Injectable, EventEmitter } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class SharedService {
  eventEmmiter: EventEmitter<any>;
  constructor() {
    this.eventEmmiter = new EventEmitter();
  }
  drop(item: any) {
    this.eventEmmiter.emit(item);
  }
}
