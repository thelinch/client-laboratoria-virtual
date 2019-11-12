import { TypeDispositive } from "./TypeDispositive.entitie";

export class TypeDispositiveTransfer {
  typeDispositive: TypeDispositive;
  type: string;
  w: number;
  h: number;
  x: number;
  y: number;
  constructor(
    typeDispositive: TypeDispositive,
    type: string,
    w: number,
    h: number,
    x: number,
    y: number
  ) {
    this.typeDispositive = typeDispositive;
    this.type = type;
    this.w = w;
    this.h = h;
    this.x = x;
    this.y = y;
  }

  constains(mx: number, my: number) {
    return (
      this.x <= mx &&
      this.x + this.w >= mx &&
      this.y <= my &&
      this.y + this.h >= my
    );
  }
  draw(ctx) {
    let image = new Image();
    image.src = this.typeDispositive.url;
    image.width = this.w;
    image.height = this.h;
    image.onload = () => this.getReadyImage(image, ctx);
  }
  getReadyImage(image, ctx) {
    ctx.drawImage(image, this.x, this.y, this.w, this.h);
  }
}
