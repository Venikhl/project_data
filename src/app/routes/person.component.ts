import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  templateUrl: '../person.component.html',
})
export class PersonComponent implements OnInit {

  public name: string;
  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    this.name = activatedRoute.snapshot.params["name"];
    

  }

  ngOnInit(): void {}
}
