import { Injectable, EventEmitter } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class SharedService {
  eventEmmiter: EventEmitter<any>;
  constructor() {
    this.eventEmmiter = new EventEmitter();
  }
  sharedDispositive(dispositiveWithRed: any) {
    this.eventEmmiter.emit(dispositiveWithRed);
  }
}
