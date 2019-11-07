import { RedEntity } from "./../entities/red.entity";
import { SharedService } from "./../../services/shared.service";
import { filterNil } from "@datorama/akita";
import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  AfterViewInit,
  Renderer2
} from "@angular/core";

import * as $ from "jquery";
import { TypeDispositiveQuery } from "src/app/dispositive/query/typeDispositive.query";
import { TypeDispositiveTransfer } from "src/app/dispositive/entities/TypeDispositiveTransfer.entitie";
import { RedQuery } from "../query/red.query";
@Component({
  selector: "app-lienzo",
  templateUrl: "./lienzo.component.html",
  styleUrls: ["./lienzo.component.scss"]
})
export class LienzoComponent implements OnInit, AfterViewInit {
  listItem: any = [];
  @ViewChild("canvas", { static: true }) canvas: ElementRef<HTMLCanvasElement>;
  private isDragging: boolean;
  private ctx: CanvasRenderingContext2D;
  private numero: number = 0;
  private listDispositiveTransfer: Array<TypeDispositiveTransfer>;
  private activateRed: RedEntity;
  offsetCanvas: any;
  position: any;
  private canMouseY: number;
  private canMouseX: number;
  constructor(
    private renderer2: Renderer2,
    private typeDispositiveQuery: TypeDispositiveQuery,
    private sharedService: SharedService,
    private redQuery: RedQuery
  ) {
    this.listDispositiveTransfer = new Array();
    this.isDragging = false;
    this.activateRed = this.redQuery.getActive();
  }

  ngAfterViewInit(): void {
    this.ctx = this.canvas.nativeElement.getContext("2d");
    this.offsetCanvas = $(this.canvas.nativeElement).offset();
    console.log(this.offsetCanvas);
    this.renderer2.listen(this.canvas.nativeElement, "mousemove", ev => {
      this.position = this.getMouse(ev);
    });
    this.renderer2.listen(this.canvas.nativeElement, "mouseUp", ev => {
      this.position = this.getMouse(ev);
    });
    this.renderer2.listen(this.canvas.nativeElement, "dblclick", e => {
      let mouse = this.getMouse(e);
      let dispositive = this.listDispositiveTransfer.find(Dt =>
        Dt.constains(mouse.x, mouse.y)
      );
      if (dispositive) {
        this.sharedService.sharedDispositive({
          red: this.activateRed.id,
          dispositive: dispositive
        });
      }
    });
  }
  ngOnInit() {
    console.log(this.canvas.nativeElement.offsetParent);
    this.typeDispositiveQuery
      .selectActive()
      .pipe(filterNil)
      .subscribe(typeDispositiveTransfer => {
        let typeDispositiveTransferCreate = new TypeDispositiveTransfer(
          typeDispositiveTransfer,
          typeDispositiveTransfer.name,
          this.ctx,
          20,
          20,
          0,
          0
        );
        typeDispositiveTransferCreate.draw();
        this.listDispositiveTransfer.push(typeDispositiveTransferCreate);
      });
  }
  openDialog(id) {
    console.log("abriendo Modal...");
  }

  getMouse(event) {
    return {
      x: parseInt(event.pageX) - parseInt(this.offsetCanvas.left),
      y: parseInt(event.pageY) - parseInt(this.offsetCanvas.top)
    };
  }
}
