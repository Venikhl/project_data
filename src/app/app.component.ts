import { Component } from '@angular/core';
import { User } from './entities/User';
import { SwapiService } from './services/swapi.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project_data';

  public users: User[] = [];

  public name: string = "";
  public position: string = "";
  public entity: any;
  public pages: any[] = [];

  public constructor(private swapi: SwapiService){}

  public ngOnInit() {
    for(let i = 1; i <= 10; i++){
      this.swapi.person(i).subscribe((res) => {
        this.pages.push(res);
      });
    }
    
  }
  public createUser(): boolean {
    this.name = (document.getElementById(
      "name"
    ) as HTMLInputElement).value;
    this.position = (document.getElementById(
      "position"
    ) as HTMLInputElement).value;

    if (
      this.name == ""
    ) {
      console.log("%c Name field must be filled", "color: red");
      (document.getElementById("reg_label") as HTMLInputElement).textContent =
        "Name field must be filled";
      (document.getElementById("reg_label") as HTMLInputElement).style.color =
        "red";
      return false;
    }

    this.users.push(
      new User(
        this.name,
        this.position
      )
    );
    console.log("%c User added", "color: green");
    (document.getElementById("reg_label") as HTMLInputElement).textContent =
      "You have created new user";
    (document.getElementById("reg_label") as HTMLInputElement).style.color =
      "green";

    (document.getElementById("name") as HTMLInputElement).value = "";
    (document.getElementById("position") as HTMLInputElement).value = "";
    return true;
  }
}

