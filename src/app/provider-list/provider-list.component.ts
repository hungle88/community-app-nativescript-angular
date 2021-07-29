import { Component, OnInit } from "@angular/core";
import * as AppSettings from "@nativescript/core/application-settings";
import { MainServiceService } from "../main-service.service";
import { RouterExtensions } from "@nativescript/angular";
import { Http, HttpResponse } from "@nativescript/core";

@Component({
  selector: "app-provider-list",
  templateUrl: "./provider-list.component.html",
  styleUrls: ["./provider-list.component.css"]
})
export class ProviderListComponent implements OnInit {
  providerList: any;
  constructor(
    private main: MainServiceService,
    private router: RouterExtensions
  ) {
    this.main.getProviderList().then(
      (response: HttpResponse) => {
        const content = response.content;
        this.providerList = JSON.parse(JSON.stringify(content));
        // console.log("this.providerList");

        // console.log(this.providerList);
      },
      e => {}
    );
  }

  onDetail(provider: any) {
    this.router.navigate(["post", provider._id]);
  }
  logout() {
    AppSettings.clear();
    this.router.navigate(["login"]);
  }
  changeLocation(city: string, state: string) {
    city = this.main.capitalization(city);
    state = this.main.capitalization(state);
    this.main.changeLocation(city, state);
  }
  ngOnInit(): void {}
}
