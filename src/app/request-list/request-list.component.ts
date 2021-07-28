import { Component, OnInit } from "@angular/core";
import { MainServiceService } from "../main-service.service";
import { RouterExtensions } from "@nativescript/angular";
import { Http, HttpResponse } from "@nativescript/core";
import * as AppSettings from "@nativescript/core/application-settings";

@Component({
  selector: "app-request-list",
  templateUrl: "./request-list.component.html",
  styleUrls: ["./request-list.component.css"]
})
export class RequestListComponent implements OnInit {
  requestList: any;

  constructor(
    private main: MainServiceService,
    private router: RouterExtensions
  ) {
    this.main.getRequestList().then(
      (response: HttpResponse) => {
        const content = response.content;
        this.requestList = JSON.parse(JSON.stringify(content));
      },
      e => {}
    );
  }

  onDetail(request: any) {
    this.router.navigate(["post", request._id]);
  }

  logout() {
    AppSettings.clear();
    this.router.navigate(["login"]);
  }
  ngOnInit(): void {}
}
