import { TypeDispositiveTransfer } from "./TypeDispositiveTransfer.entitie";
import * as $ from "jquery";

export class MyState {
  dispositiveTransfers: Array<TypeDispositiveTransfer>;
  isDragging: boolean;
  ctx: CanvasRenderingContext2D;
  dragoffx: number;
  dragoffy: number;
  canvasWidth: number;
  canvasHeight: number;
  canvas: HTMLCanvasElement;
  offsetCanvasX: number;
  offsetCanvasY: number;
  stylePaddingLeft: number;
  stylePaddingTop: number;
  styleBorderLeft: number;
  styleBorderTop: number;
  dispositiveTransferSelected: TypeDispositiveTransfer;
  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.dragoffx = 0;
    this.dragoffy = 0;
    this.canvasHeight = canvas.height;
    this.canvasWidth = canvas.width;
    this.dispositiveTransfers = new Array();
    this.offsetCanvasX = $(canvas).offset().left;
    this.offsetCanvasY = $(canvas).offset().top;
    this.styleBorderLeft = parseInt(
      document.defaultView.getComputedStyle(canvas, null)["paddingLeft"],
      10
    );
    this.stylePaddingLeft = parseInt(
      document.defaultView.getComputedStyle(canvas, null)["borderLeftWidth"],
      10
    );
    this.stylePaddingTop = parseInt(
      document.defaultView.getComputedStyle(canvas, null)["paddingTop"],
      10
    );
    this.styleBorderTop = parseInt(
      document.defaultView.getComputedStyle(canvas, null)["borderTopWidth"],
      10
    );
  }
  set _dispositiveTransfer(dispositiveTransfer: TypeDispositiveTransfer) {
    this.dispositiveTransfers.push(dispositiveTransfer);
  }
  move() {
    if (this.ctx) new Error("Context not defined");
  }
  draw() {
    this.clear();
    for (let i = 0; i < this.dispositiveTransfers.length; i++) {
      let element = this.dispositiveTransfers[i];
      if (
        element.x > this.canvasWidth ||
        element.y > this.canvasHeight ||
        element.x + element.w < 0 ||
        element.y + element.h < 0
      )
        continue;
      element.draw(this.ctx);
    }
  }
  clear() {
    this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
  }
  set _selectedDispositiveTransfer(
    typeDispositiveTranfer: TypeDispositiveTransfer
  ) {
    this.dispositiveTransferSelected = typeDispositiveTranfer;
  }
  getMouse(e) {
    let mx: number;
    let my: number;
    let offsetX: number =
      this.stylePaddingTop + this.styleBorderTop + this.offsetCanvasX;
    let offsetY: number =
      this.offsetCanvasY + this.stylePaddingLeft + this.styleBorderLeft;
    mx = e.clientX - offsetX;
    my = e.clientY - offsetY;
    return { x: Math.trunc(mx), y: Math.trunc(my) };
  }
}
