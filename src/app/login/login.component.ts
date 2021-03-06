import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators
} from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { MainServiceService } from "../main-service.service";
import * as AppSettings from "@nativescript/core/application-settings";
import { RouterExtensions } from "@nativescript/angular";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent {
  constructor(
    private router: RouterExtensions,
    private main: MainServiceService,
    private route: ActivatedRoute
  ) {
    if (AppSettings.getString("token")) {
      this.router.navigate(["providers"]);
    }
  }

  onSubmit(email: string, password: string): void {
    const loginForm = { email: email.toLocaleLowerCase(), password: password };
    console.log(loginForm);
    this.main.login(loginForm);
    this.router.navigate(["loading"]);
  }

  onSignUp() {
    this.router.navigate(["signup"]);
  }
}
