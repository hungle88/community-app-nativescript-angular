import { Component, ContentChild, OnInit } from "@angular/core";
import { MainServiceService } from "../main-service.service";
import { RouterExtensions } from "@nativescript/angular";
import { Http, HttpResponse } from "@nativescript/core";
import { ActivatedRoute } from "@angular/router";
import * as AppSettings from "@nativescript/core/application-settings";

@Component({
  selector: "app-edit-post",
  templateUrl: "./edit-post.component.html",
  styleUrls: ["./edit-post.component.css"]
})
export class EditPostComponent implements OnInit {
  postDetail: any;
  id: any;
  userId: any;

  constructor(
    private main: MainServiceService,
    private router: RouterExtensions,
    private route: ActivatedRoute
  ) {
    this.id = this.route.snapshot.params.id;
    this.userId = AppSettings.getString("userId");
    console.log("this.id");

    console.log(this.id);
    this.main.getPostDetail(this.id).then(
      (response: HttpResponse) => {
        const content = response.content;
        this.postDetail = JSON.parse(JSON.stringify(content))[0];
        console.log("this.postDetail");
        console.log(this.postDetail);
      },
      e => {}
    );
  }

  onSubmit(content: string): void {
    if (content == "") {
      content = this.postDetail.content;
    }

    const editForm = {
      content: content,
      city: AppSettings.getString("city"),
      state: AppSettings.getString("state")
    };
    console.log(editForm);
    this.main.editPost(editForm, this.postDetail._id);

    this.router.navigate(["post", this.postDetail._id]);
  }

  ngOnInit(): void {}
}
