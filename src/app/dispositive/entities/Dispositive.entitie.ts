import { RedEntity } from "./../../red/entities/red.entity";
import { TypeDispositive } from "./TypeDispositive.entitie";
import { MaestroDispositive } from "./MaestroDispositive.entitie";
import { ID } from "@datorama/akita";

export class Dispositive {
  id: ID;
  name: string;
  typeDispositive: TypeDispositive;
  red: RedEntity;
  maestroDispositive: MaestroDispositive[];
  x: number;
  y: number;
}
