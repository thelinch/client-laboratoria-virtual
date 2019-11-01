import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Maestro } from "src/app/global/entities/Maestro.entitie";

@Injectable({
  providedIn: "root"
})
export class MaestroService {
  private urlController = "http://localhost:3000/maestro";
  constructor(private http: HttpClient) {}

  all(): Observable<Maestro[]> {
    return this.http.get<Maestro[]>(this.urlController + "/all");
  }
}
