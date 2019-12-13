import { ID } from "@datorama/akita";
import { Dispositive } from "src/app/dispositive/entities/Dispositive.entitie";

export class RedEntity {
  id: ID;
  name: string;
  description: string;
  dispositives: Dispositive[];
  status: boolean;
}
