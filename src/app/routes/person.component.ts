import { Component, Input, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { AppComponent } from "../app.component";
import { User } from "../entities/User";

@Component({
  selector: 'app-person',
  templateUrl: '../person.component.html',
})
export class PersonComponent implements OnInit {
  @Input() users: any[] = [];

  public id: string;
  public user: any;
  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    this.id = activatedRoute.snapshot.params["id"];
    for(let i = 0; i < this.users.length; i++){
      if(this.users[i].id == this.id){
        this.user = this.users[i];
      }
    }

  }

  ngOnInit(): void {}
}
