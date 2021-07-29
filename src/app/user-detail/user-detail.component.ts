import { Component, OnInit } from "@angular/core";
import { MainServiceService } from "../main-service.service";
import { RouterExtensions } from "@nativescript/angular";
import { Http, HttpResponse } from "@nativescript/core";
import { ActivatedRoute } from "@angular/router";
import * as AppSettings from "@nativescript/core/application-settings";

@Component({
  selector: "app-user-detail",
  templateUrl: "./user-detail.component.html",
  styleUrls: ["./user-detail.component.css"]
})
export class UserDetailComponent implements OnInit {
  userDetail: any;
  id: any;

  constructor(
    private main: MainServiceService,
    private router: RouterExtensions,
    private route: ActivatedRoute
  ) {
    this.id = this.route.snapshot.params.id;
    // console.log("this.id");

    // console.log(this.id);
    this.main.getUserDetail(this.id).then(
      (response: HttpResponse) => {
        const content = response.content;
        this.userDetail = JSON.parse(JSON.stringify(content))[0];
        console.log(this.userDetail);
      },
      e => {}
    );
  }

  ngOnInit(): void {}
}
