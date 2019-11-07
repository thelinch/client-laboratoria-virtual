import { TypeDispositiveStore } from "./../store/typeDispositive.store";
import { tap, map } from "rxjs/operators";
import { Observable } from "rxjs";
import { TypeDispositive } from "./../entities/TypeDispositive.entitie";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ID, transaction } from "@datorama/akita";

@Injectable({
  providedIn: "root"
})
export class TypeDispositiveService {
  private urlController = "http://localhost:3000/typeDispositive/";

  constructor(
    private _http: HttpClient,
    private storeTypeDispositive: TypeDispositiveStore
  ) {}
  get(): Observable<TypeDispositive[]> {
    return this._http.get<TypeDispositive[]>(this.urlController + "all").pipe(
      map(d => {
        let l = d.map(e => {
          return { ...e, totalTransfer: 0 };
        });
        return l;
      }),
      tap(t => {
        this.storeTypeDispositive.set(t);
      })
    );
  }
  @transaction()
  selectTransferType(id: ID) {
    this.storeTypeDispositive.update(id, state => ({
      totalTransfer: state.totalTransfer + 1
    }));
    this.setActive(id);
  }
  private setActive(id: ID) {
    this.storeTypeDispositive.setActive(id);
  }
}
