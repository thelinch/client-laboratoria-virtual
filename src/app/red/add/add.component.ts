import { RedEntity } from "./../entities/red.entity";
import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators
} from "@angular/forms";
import { RedService } from "../services/red.service";
import { NotificacionBusService } from "src/app/services/notificationBusService.service";
import Swal from "sweetalert2";
@Component({
  selector: "app-add",
  templateUrl: "./add.component.html",
  styleUrls: ["./add.component.scss"]
})
export class AddComponent implements OnInit {
  formRed: FormGroup;
  constructor(
    public dialogRef: MatDialogRef<AddComponent>,
    @Inject(MAT_DIALOG_DATA) public data: RedEntity,
    private _fb: FormBuilder,
    private redService: RedService,
    private notificationBusService: NotificacionBusService
  ) {}

  ngOnInit() {
    this.formRed = this._fb.group({
      name: new FormControl("", [Validators.required]),
      description: new FormControl("", [Validators.required])
    });
    this.notificationBusService.showNotificacionSource.subscribe(
      notificacion => {
        Swal.fire({
          html: notificacion.detalle,
          toast: true,
          timer: 3000,
          position: "top-end",
          icon: notificacion.severidad
        });
      }
    );
  }
  async createRed() {
    if (this.formRed.valid) {
      console.log("creando la red..", this.formRed.value);
      let redCreate = await this.redService.save(this.formRed.value);
      if (redCreate) {
        this.notificationBusService.showSuccess(
          "Se creo correctamente " + redCreate.name
        );
        this.dialogRef.close();
      } else {
      }
    } else {
      console.log("Mostrando mensaje de error...");
      this.notificationBusService.showError("Error al crear  Red");
    }
  }
}
