import { Component, OnInit } from "@angular/core";
import { MainServiceService } from "../main-service.service";
import { RouterExtensions } from "@nativescript/angular";
import { Http, HttpResponse } from "@nativescript/core";
import { ActivatedRoute } from "@angular/router";
import * as AppSettings from "@nativescript/core/application-settings";

@Component({
  selector: "app-my-profile",
  templateUrl: "./my-profile.component.html",
  styleUrls: ["./my-profile.component.css"]
})
export class MyProfileComponent implements OnInit {
  userId: any;
  userDetail: any;

  constructor(
    private main: MainServiceService,
    private router: RouterExtensions,
    private route: ActivatedRoute
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

  onEdit() {
    this.router.navigate(["profile/edit"]);
  }

  logout() {
    AppSettings.clear();
    this.router.navigate(["login"]);
  }
  ngOnInit(): void {}
}
