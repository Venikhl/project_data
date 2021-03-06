import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { User } from './entities/User';
import { SwapiService } from './services/swapi.service';
import * as uuid from 'uuid';
import { PersonComponent } from './routes/person.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  @ViewChild(PersonComponent)
  viewChild: PersonComponent | undefined
  title = 'project_data';

  public users: any[] = [];

  public name: string = "";
  public gender: string = "";
  public height: string = "";
  public position: string = "";
  public user_tp: any;

  public constructor(private swapi: SwapiService){}
  ngAfterViewInit() {
    console.log(this.viewChild)
  }


  public ngOnInit() {
    for(let i = 1; i <= 10; i++){
      this.swapi.person(i).subscribe((res) => {
        this.user_tp = res;
        this.user_tp.id = uuid.v4();
        this.users.push(this.user_tp);
      });
    }
  }
  public createUser(): boolean {
    this.name = (document.getElementById(
      "name"
    ) as HTMLInputElement).value;
    this.gender = (document.getElementById(
      "gender"
    ) as HTMLInputElement).value;
    this.height = (document.getElementById(
      "height"
    ) as HTMLInputElement).value;
    this.position = (document.getElementById(
      "position"
    ) as HTMLInputElement).value;

    if (
      this.name == "",
      this.gender == "",
      this.height == ""
    ) {
      (document.getElementById("reg_label") as HTMLInputElement).textContent =
        "All fields must be filled";
      (document.getElementById("reg_label") as HTMLInputElement).style.color =
        "red";
      return false;
    }

    this.users.push(
      new User(
        this.name,
        this.gender,
        this.height,
        uuid.v4(),
        this.position
      )
    );
    (document.getElementById("reg_label") as HTMLInputElement).textContent =
      "User added";
    (document.getElementById("reg_label") as HTMLInputElement).style.color =
      "green";

      (document.getElementById("name") as HTMLInputElement).value = "";
      (document.getElementById("gender") as HTMLInputElement).value = "";
      (document.getElementById("height") as HTMLInputElement).value = "";
    (document.getElementById("position") as HTMLInputElement).value = "";
    return true;
  }
}

