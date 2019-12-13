import { tap } from "rxjs/operators";
import { Observable } from "rxjs";
import { RedEntity } from "./../entities/red.entity";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { RedStore } from "../store/red.store";
import { transaction } from "@datorama/akita";
import { Dispositive } from "src/app/dispositive/entities/Dispositive.entitie";

@Injectable({
  providedIn: "root"
})
export class RedService {
  private urlController = "http://localhost:3000/red/";
  private id: number = 0;
  constructor(private _http: HttpClient, private store: RedStore) {}
  save(red: RedEntity): Promise<RedEntity> {
    return this._http
      .post<RedEntity>(this.urlController + "save", red)
      .pipe(
        tap(redCreate => {
          this.addAndActiceEntity(redCreate);
        })
      )
      .toPromise();
  }
  @transaction()
  addAndActiceEntity(redCreate: RedEntity) {
    this.store.add(redCreate);
    this.store.setActive(redCreate.id);
  }
  activeRed(idRed: number) {
    this.store.setActive(idRed);
  }
  all(): Observable<RedEntity[]> {
    return this._http
      .get<RedEntity[]>(this.urlController + "all")
      .pipe(tap(listRed => this.store.set(listRed)));
  }
  getDispositiveOfRedId(idRed: number): Promise<RedEntity> {
    return this._http
      .get<RedEntity>(this.urlController + idRed + "dispositives")
      .toPromise();
  }
  @transaction()
  async getDispositivesAndActiveRed(idRed: any) {
    let red = await this.getDispositiveOfRedId(idRed);
    console.log(red);
    this.store.update(idRed, {
      description: red.description,
      name: red.name,
      dispositives: red.dispositives,
      id: red.id,
      status: red.status
    });
    this.store.setActive(idRed);
  }
}
