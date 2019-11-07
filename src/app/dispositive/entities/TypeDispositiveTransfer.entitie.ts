import { TypeDispositive } from "./TypeDispositive.entitie";

export class TypeDispositiveTransfer {
  typeDispositive: TypeDispositive;
  type: string;
  w: number;
  h: number;
  x: number;
  y: number;
  ctx: CanvasRenderingContext2D;
  constructor(
    typeDispositive: TypeDispositive,
    type: string,
    ctx: CanvasRenderingContext2D,
    w: number,
    h: number,
    x: number,
    y: number
  ) {
    this.typeDispositive = typeDispositive;
    this.type = type;
    this.ctx = ctx;
    this.w = w;
    this.h = h;
    this.x = x;
    this.y = y;
  }
  set _ctx(ctx: CanvasRenderingContext2D) {
    this.ctx = ctx;
  }

  constains(mx: number, my: number) {
    return (
      this.x <= mx &&
      this.x + this.w >= mx &&
      this.y <= my &&
      this.y + this.h >= my
    );
  }
  draw() {
    if (!this.ctx) new Error("ctx no existe para la entidada");
    else {
      let image = new Image();
      image.src = this.typeDispositive.url;
      image.width = this.w;
      image.height = this.h;
      image.onload = () => this.getReadyImage(image);
    }
  }
  getReadyImage(image) {
    this.ctx.drawImage(image, this.x, this.y, this.w, this.h);
  }
  move() {
    if (!this.ctx) new Error("No se encuentra referenciado el ctx del canva ");
    else {
    }
  }
}
