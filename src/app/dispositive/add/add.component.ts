import { DispositiveService } from "./../services/dispositive.service";
import { MaestroService } from "./../services/maestro.service";
import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { Dispositive } from "../entities/Dispositive.entitie";
import { $pages } from "./typeDispositive-pages";
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from "@angular/forms";
import { $animations } from "./add-animations";
import { Maestro } from "src/app/global/entities/Maestro.entitie";
export type addType = "Pc" | "Switch" | "Router";
@Component({
  selector: "app-add",
  templateUrl: "./add.component.html",
  styleUrls: ["./add.component.scss"],
  animations: $animations
})
export class AddComponent implements OnInit {
  private pages = $pages;
  public page: any;
  formAddDispositive: FormGroup;
  private bits: FormControl;
  private name: FormControl;
  private port: FormControl;
  private paridad: FormControl;
  private ip: FormControl;
  private type: FormControl;
  private allMaestro: Maestro[];
  constructor(
    public dialogRef: MatDialogRef<AddComponent>,
    @Inject(MAT_DIALOG_DATA) public data: addType,
    private _fb: FormBuilder,
    private maestroService: MaestroService,
    private dispositiveService: DispositiveService
  ) {
    this.bits = new FormControl(null, [Validators.required]);
    this.port = new FormControl(null, [Validators.required]);
    this.paridad = new FormControl(null, [Validators.required]);
    this.ip = new FormControl(null, [Validators.required]);
    this.name = new FormControl(null, [Validators.required]);
    this.type = new FormControl(null, [Validators.required]);
    this.formAddDispositive = this._fb.group({
      maestroDispositive: this._fb.group({})
    });
    this.switchPage((this.page = data));
  }
  get currentPage() {
    return this.pages[this.page || "Pc"];
  }
  ngOnInit() {}
  onNoclick(): void {
    this.dialogRef.close();
  }
  async addDispositive() {
    let valueForm = this.formAddDispositive.value;
    this.allMaestro = await this.maestroService.all().toPromise();
    let arrayMaestroDetail = Object.keys(
      this.formAddDispositive.value["maestroDispositive"]
    ).map(key => {
      let maestro = this.allMaestro.find(e => e.name == key);

      return {
        maestro: { id: maestro.id, name: key },
        value: this.formAddDispositive.value["maestroDispositive"][key]
      };
    });
    valueForm.maestroDispositive = arrayMaestroDetail;
    let dispositiveCreate = await this.dispositiveService
      .save(valueForm as Dispositive)
      .toPromise();
    this.formAddDispositive.reset({
      type: dispositiveCreate.typeDispositive.name
    });
  }
  switchPage(page: addType) {
    //Remueve los controlers
    Object.keys(this.formAddDispositive.controls).forEach(c => {
      this.formAddDispositive.removeControl(c);
    });
    this.type.setValue(page);
    this.formAddDispositive.addControl("name", this.name);
    this.formAddDispositive.addControl("type", this.type);
    switch ((this.page = page)) {
      case "Pc":
        this.formAddDispositive.setControl(
          "maestroDispositive",
          this._fb.group({
            ip: this.ip
          })
        );

        console.log("pc");
        break;
      case "Switch":
        console.log("Switch");
        this.formAddDispositive.setControl(
          "maestroDispositive",
          this._fb.group({
            ip: this.ip,
            bits: this.bits,
            puerto: this.port
          })
        );
        break;
      case "Router":
        console.log("router");
        this.formAddDispositive.setControl(
          "maestroDispositive",
          this._fb.group({
            ip: this.ip,
            puerto: this.port
          })
        );

        break;
    }
  }
}
