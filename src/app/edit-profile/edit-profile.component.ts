import { Component, OnInit } from "@angular/core";
import * as AppSettings from "@nativescript/core/application-settings";
import { RouterExtensions } from "@nativescript/angular";
import { MainServiceService } from "../main-service.service";
import { Http, HttpResponse } from "@nativescript/core";

@Component({
  selector: "app-edit-profile",
  templateUrl: "./edit-profile.component.html",
  styleUrls: ["./edit-profile.component.css"]
})
export class EditProfileComponent implements OnInit {
  userId: any;
  userDetail: any;
  constructor(
    private router: RouterExtensions,
    private main: MainServiceService
  ) {
    this.userId = AppSettings.getString("userId");

    this.main.getUserDetail(this.userId).then(
      (response: HttpResponse) => {
        const content = response.content;
        this.userDetail = JSON.parse(JSON.stringify(content))[0];

        console.log(this.userDetail);
      },
      e => {}
    );
  }
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
    if (fullName == "") {
      fullName = this.userDetail.fullname;
    }
    if (email == "") {
      email = this.userDetail.email;
    }
    if (password == "") {
      password = this.userDetail.password;
    }
    if (address == "") {
      address = this.userDetail.address;
    }
    if (city == "") {
      city = this.userDetail.city;
    }
    if (state == "") {
      state = this.userDetail.state;
    }
    if (zipcode == "") {
      zipcode = this.userDetail.zipcode;
    }
    if (phone == "") {
      phone = this.userDetail.phone;
    }

    const editForm = {
      fullname: fullName,
      email: email.toLocaleLowerCase(),
      password: password,
      address: address,
      city: city,
      state: state,
      zipcode: zipcode,
      phone: phone
    };
    console.log(editForm);
    this.main.editProfile(editForm, this.userDetail._id);

    this.router.navigate(["profile"]);
  }

  ngOnInit(): void {}
}
