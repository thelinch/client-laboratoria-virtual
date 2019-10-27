import { Dispositive } from "./../entities/Dispositive.entitie";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class DispositiveService {
  private urlController = "http://localhost:4000/dispositive";
  constructor(private _http: HttpClient) {}
  save(dispositive: Dispositive): Observable<Dispositive> {
    return this._http.post<Dispositive>(
      this.urlController + "/create",
      dispositive
    );
  }
}
