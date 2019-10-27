import { Component, OnInit } from "@angular/core";

@Component({
  selector: "red-component",
  template: `
    <app-new-red></app-new-red>
  `
})
export class RedComponent implements OnInit {
  ngOnInit() {}
}
