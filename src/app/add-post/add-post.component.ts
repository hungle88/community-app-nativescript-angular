import { Component, OnInit } from "@angular/core";
import * as AppSettings from "@nativescript/core/application-settings";
import { MainServiceService } from "../main-service.service";
import { RouterExtensions } from "@nativescript/angular";
import { SelectedIndexChangedEventData } from "nativescript-drop-down";

import { Http, HttpResponse } from "@nativescript/core";

@Component({
  selector: "app-add-post",
  templateUrl: "./add-post.component.html",
  styleUrls: ["./add-post.component.css"]
})
export class AddPostComponent implements OnInit {
  public selectedIndex = 1;
  public items: Array<string>;

  constructor(
    private router: RouterExtensions,
    private main: MainServiceService
  ) {
    this.items = ["Service Providers", "Help Requests"];
  }
  onSubmit(content: string, city: string, state: string): void {
    city = this.main.capitalization(city);
    state = this.main.capitalization(state);
    const newPost = {
      type: this.items[this.selectedIndex],
      content: content,
      city: city,
      state: state,
      ownerId: AppSettings.getString("userId")
    };
    console.log(newPost);

    this.main.addPost(newPost);
setTimeout(() => {
  if (newPost.type == "Help Requests") {
    this.router.navigate(["requests"]);
  }
  if (newPost.type == "Service Providers") {
    this.router.navigate(["providers"]);

  }
}, 1000);

  }

  public onchange(args: SelectedIndexChangedEventData) {
    console.log(
      `Drop Down selected index changed from ${args.oldIndex} to ${args.newIndex}`
    );
  }

  public onopen() {
    console.log("Drop Down opened.");
  }

  public onclose() {
    console.log("Drop Down closed.");
  }
  ngOnInit(): void {}
}
