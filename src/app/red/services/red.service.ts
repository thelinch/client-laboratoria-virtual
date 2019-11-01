import { tap } from "rxjs/operators";
import { Observable } from "rxjs";
import { RedEntity } from "./../entities/red.entity";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { RedStore } from "../store/red.store";

@Injectable({
  providedIn: "root"
})
export class RedService {
  private urlController = "http://localhost:3000/red/";
  private id: number = 0;
  constructor(private _http: HttpClient, private store: RedStore) {}
  save(red: RedEntity): Promise<RedEntity> {
    this.id++;
    return new Promise<RedEntity>((result, reject) => {
      result({ ...red, id: this.id });
    });
    /* return this._http
      .post<RedEntity>(this.urlController + "create", red).pipe(tap(redCreate=>this.store.add(redCreate)))
      .toPromise();*/
  }
  all(): Observable<RedEntity[]> {
    return this._http
      .get<RedEntity[]>(this.urlController + "all")
      .pipe(tap(listRed => this.store.set(listRed)));
  }
}
