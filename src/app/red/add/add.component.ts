import { RedEntity } from "./../entities/red.entity";
import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators
} from "@angular/forms";
import { RedStore } from "../store/red.store";
import { RedService } from "../services/red.service";
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
    private store: RedStore
  ) {}

  ngOnInit() {
    this.formRed = this._fb.group({
      title: new FormControl("", [Validators.required]),
      description: new FormControl("", [Validators.required])
    });
  }
  async createRed() {
    if (this.formRed.valid) {
      console.log("creando la red..", this.formRed.value);
      let redCreate = await this.redService.save(this.formRed.value);
      if (redCreate) {
        this.dialogRef.close();
        this.store.add(redCreate);
      } else {
      }
    } else {
      console.log("Mostrando mensaje de error...");
    }
  }
}
