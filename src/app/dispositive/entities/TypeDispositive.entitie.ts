import { ID } from "@datorama/akita";

export interface TypeDispositive {
  id: ID;
  name: string;
  totalDispositive: number;
  url: string;
  totalTransfer: number;
  xDrop: number;
  yDrop: number;
}
