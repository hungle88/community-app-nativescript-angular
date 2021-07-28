import { Component, OnInit } from "@angular/core";
import * as AppSettings from "@nativescript/core/application-settings";
import { RouterExtensions } from "@nativescript/angular";
import { MainServiceService } from "../main-service.service";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"]
})
export class SignupComponent implements OnInit {
  constructor(
    private router: RouterExtensions,
    private main: MainServiceService
  ) {}
  onSubmit(
    fullName: string,
    email: string,
    password: string,
    address: string,
    city: string,
    state: string,
    zipcode: string,
    phone: string
  ): void {
    fullName = this.main.capitalization(fullName);
    city = this.main.capitalization(city);
    state = this.main.capitalization(state);
    const signupForm = {
      fullname: fullName,
      email: email.toLocaleLowerCase(),
      password: password,
      address: address,
      city: city,
      state: state,
      zipcode: zipcode,
      phone: phone
    };
    console.log(signupForm);
    this.main.signup(signupForm);

    this.router.navigate(["login"]);
    alert("Signed up successfully!")
  }
  ngOnInit(): void {}
}
