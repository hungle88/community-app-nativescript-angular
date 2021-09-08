import { Component, OnInit } from "@angular/core";
import { MainServiceService } from "../main-service.service";
import { RouterExtensions } from "@nativescript/angular";
import { Http, HttpResponse } from "@nativescript/core";
import { ActivatedRoute } from "@angular/router";
import * as AppSettings from "@nativescript/core/application-settings";

@Component({
  selector: "app-post-detail",
  templateUrl: "./post-detail.component.html",
  styleUrls: ["./post-detail.component.css"]
})
export class PostDetailComponent implements OnInit {
  postDetail: any;
  id: any;
  userId: any;
  commentState: any;
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
        console.log(this.postDetail);
      },
      e => {}
    );
  }
  onDetail(provider: any) {
    this.router.navigate(["user", this.postDetail.ownerId]);
  }

  addComment(comment: string): void {
    const commentContent = {
      commentContent: comment
    };

    this.main.addComment(commentContent, this.id);
    this.commentState = "";
    setTimeout(() => {
      this.main.getPostDetail(this.id).then(
        (response: HttpResponse) => {
          const content = response.content;
          this.postDetail = JSON.parse(JSON.stringify(content))[0];
          console.log(this.postDetail);
        },
        e => {}
      );
    }, 1000);
    console.log("this.commentState");
    console.log(this.commentState);
  }

  onEditPost() {
    this.router.navigate(["post", this.postDetail._id, "edit"]);
  }

  onEditComment(comment: any) {
    this.router.navigate(
      ["post", this.postDetail.ownerId, "comment", comment._id, "edit"],
      {
        queryParams: {
          commentContent: comment.commentContent,
          postId: this.id,
          commentId: comment._id
        }
      }
    );
  }

  onDeletePost() {
    this.main.deletePost(this.id);
    if (this.postDetail.type == "Service Providers")
      this.router.navigate(["providers"]);
    if (this.postDetail.type == "Help Requests") {
      this.router.navigate(["requests"]);
    }
  }

  onDeleteComment(comId: any) {
    this.main.deleteComment(this.id, comId);
    setTimeout(() => {
      this.main.getPostDetail(this.id).then(
        (response: HttpResponse) => {
          const content = response.content;
          this.postDetail = JSON.parse(JSON.stringify(content))[0];
          console.log(this.postDetail);
        },
        e => {}
      );
    }, 1000);
  }

  ngOnInit(): void {}
}
