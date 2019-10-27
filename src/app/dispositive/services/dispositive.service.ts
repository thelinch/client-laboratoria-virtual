import { Dispositive } from "./../entities/Dispositive.entitie";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { DispositiveStore } from "../store/dispositive.store";
import { tap } from "rxjs/operators";
@Injectable({
  providedIn: "root"
})
export class DispositiveService {
  private urlController = "http://localhost:4000/dispositive";
  constructor(private _http: HttpClient, private store: DispositiveStore) {}
  save(dispositive: Dispositive): Observable<Dispositive> {
    return this._http
      .post<Dispositive>(this.urlController + "/create", dispositive)
      .pipe(tap(dispositive => this.store.add(dispositive)));
  }
  all(): Observable<Dispositive[]> {
    return this._http
      .get<Dispositive[]>(this.urlController + "/all")
      .pipe(tap(dispositives => this.store.set(dispositives)));
  }
}
