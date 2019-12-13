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

import { TypeDispositiveQuery } from "src/app/dispositive/query/typeDispositive.query";
import { TypeDispositiveTransfer } from "src/app/dispositive/entities/TypeDispositiveTransfer.entitie";
import { RedQuery } from "../query/red.query";
import { MyState } from "src/app/dispositive/entities/myState.entitie";
@Component({
  selector: "app-lienzo",
  templateUrl: "./lienzo.component.html",
  styleUrls: ["./lienzo.component.scss"]
})
export class LienzoComponent implements OnInit, AfterViewInit {
  listItem: any = [];
  @ViewChild("canvas", { static: true }) canvas: ElementRef<HTMLCanvasElement>;
  private activateRed: RedEntity;
  offsetCanvas: any;
  position: any;
  private myState: MyState;
  constructor(
    private renderer2: Renderer2,
    private typeDispositiveQuery: TypeDispositiveQuery,
    private sharedService: SharedService,
    private redQuery: RedQuery
  ) {}

  ngAfterViewInit(): void {}
  ngOnInit() {
    this.myState = new MyState(this.canvas.nativeElement);
    this.redQuery
      .selectActive()
      .pipe(filterNil)
      .subscribe(redActive => {
        this.activateRed = redActive;
        this.activateRed.dispositives.forEach(d => {
          let typeDispositiveTransferCreate = new TypeDispositiveTransfer(
            d.typeDispositive,
            d.typeDispositive.name,
            20,
            20,
            d.y,
            d.x
          );
          this.myState.dispositiveTransfers.push(typeDispositiveTransferCreate);
        });
        this.myState.draw();
      });
    this.typeDispositiveQuery
      .selectActive()
      .pipe(filterNil)
      .subscribe(typeDispositiveTransfer => {
        let typeDispositiveTransferCreate = new TypeDispositiveTransfer(
          typeDispositiveTransfer,
          typeDispositiveTransfer.name,
          20,
          20,
          0,
          0
        );
        this.myState.dispositiveTransfers.push(typeDispositiveTransferCreate);
        this.myState.draw();
      });
    this.renderer2.listen(this.canvas.nativeElement, "mousedown", e => {
      let mouse = this.myState.getMouse(e);
      this.myState.dispositiveTransferSelected = this.myState.dispositiveTransfers.find(
        element => element.constains(mouse.x, mouse.y)
      );
      if (this.myState.dispositiveTransferSelected) {
        this.myState.dragoffx =
          mouse.x - this.myState.dispositiveTransferSelected.x;
        this.myState.dragoffy =
          mouse.y - this.myState.dispositiveTransferSelected.y;
        this.myState.isDragging = true;
      }
    });
    this.renderer2.listen(this.canvas.nativeElement, "mouseup", e => {
      this.myState.isDragging = false;
    });
    this.renderer2.listen(this.canvas.nativeElement, "mousemove", e => {
      let mouse = this.myState.getMouse(e);
      if (this.myState.dispositiveTransfers && this.myState.isDragging) {
        this.myState.dispositiveTransferSelected.x =
          mouse.x - this.myState.dragoffx;
        this.myState.dispositiveTransferSelected.y =
          mouse.y - this.myState.dragoffy;
        this.myState.draw();
      }
    });
    this.renderer2.listen(this.canvas.nativeElement, "dblclick", e => {
      let mouse = this.myState.getMouse(e);
      let dispositiveTransfer = this.myState.dispositiveTransfers.find(d =>
        d.constains(mouse.x, mouse.y)
      );
      if (dispositiveTransfer) {
        let redActive = this.redQuery.getActive();
        this.sharedService.sharedDispositive({
          dispositive: dispositiveTransfer,
          red: 31
        });
      }
    });
  }
  openDialog(id) {
    console.log("abriendo Modal...");
  }
}
