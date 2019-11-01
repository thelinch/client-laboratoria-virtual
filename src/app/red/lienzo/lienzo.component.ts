import { filterNil } from "@datorama/akita";
import { SharedService } from "./../../services/shared.service";
import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  AfterViewInit
} from "@angular/core";
import { transferArrayItem } from "@angular/cdk/drag-drop";

@Component({
  selector: "app-lienzo",
  templateUrl: "./lienzo.component.html",
  styleUrls: ["./lienzo.component.scss"]
})
export class LienzoComponent implements OnInit, AfterViewInit {
  ngAfterViewInit(): void {
    this.ctx = this.canvas.nativeElement.getContext("2d");
    let image = new Image();
    image.src = "assets/dispositivos/pc.png";
    this.ctx.drawImage(image, 200, 200);
  }
  listItem: any = [];
  @ViewChild("canvas", { static: true }) canvas: ElementRef<HTMLCanvasElement>;
  private ctx: CanvasRenderingContext2D;
  constructor(private sharedService: SharedService) {}

  ngOnInit() {
    this.sharedService.eventEmmiter.pipe(filterNil).subscribe(event => {
      console.log(event);
      this.listItem.push(event);
    });
  }
}
