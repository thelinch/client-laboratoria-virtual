import { Component, OnInit } from "@angular/core";
import { RedQuery } from "src/app/red/query/red.query";
import { filterNil } from "@datorama/akita";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "list-red-component",
  template: `
    <app-list-red></app-list-red>
  `
})
export class ListRedComponent implements OnInit {
  ngOnInit() {
    this.redQuery
      .selectActive()
      .pipe(filterNil)
      .subscribe(e => {
        this.router.navigate([`../new-red/${e.id}`], {
          relativeTo: this.route
        });
      });
  }
  constructor(
    private redQuery: RedQuery,
    private router: Router,
    private route: ActivatedRoute
  ) {}
}
