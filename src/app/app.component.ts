import { Component } from "@angular/core";
import { MainServiceService } from "./main-service.service";
import { RouterExtensions } from "@nativescript/angular";
import { Http, HttpResponse } from "@nativescript/core";
import * as AppSettings from "@nativescript/core/application-settings";
import { ActivatedRoute } from "@angular/router";
// import { Page } from "@nativescript/core/ui/page";
// import { ReactiveFormsModule } from "@angular/forms";
// import { NativeScriptFormsModule } from "nativescript-angular/forms";

@Component({
  selector: "ns-app",
  templateUrl: "./app.component.html"
})
export class AppComponent {
  cityHint: string;
  stateHint: string;
  currentUser = AppSettings.getString("userFullname");
  constructor(
    private main: MainServiceService,
    private router: RouterExtensions,
    private route: ActivatedRoute
  ) {
    console.log(this.route.url);
    console.log(this.currentUser);

    this.cityHint = "City";
    this.stateHint = "State";
  }

  changeLocation(city: string, state: string) {
    this.cityHint = "City";
    this.stateHint = "State";
    city = this.main.capitalization(city);
    state = this.main.capitalization(state);
    this.main.changeLocation(city, state);
    this.router.navigate(["loading"]);
  }
}
