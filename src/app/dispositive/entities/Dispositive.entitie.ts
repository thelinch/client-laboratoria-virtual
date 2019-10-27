import { TypeDispositive } from "./TypeDispositive.entitie";
import { MaestroDispositive } from "./MaestroDispositive.entitie";

export class Dispositive {
  id: number;
  name: string;
  typeDispositive: TypeDispositive;
  maestroDispositive: MaestroDispositive[];
}
