import { Component, OnInit } from "@angular/core";
import { MainServiceService } from "../main-service.service";
import { RouterExtensions } from "@nativescript/angular";
import { Http, HttpResponse } from "@nativescript/core";
import { ActivatedRoute } from "@angular/router";
import * as AppSettings from "@nativescript/core/application-settings";
import { convertString } from "@nativescript/core/utils";

@Component({
  selector: "app-edit-comment",
  templateUrl: "./edit-comment.component.html",
  styleUrls: ["./edit-comment.component.css"]
})
export class EditCommentComponent implements OnInit {
  postId: any;
  commentId: any;
  commentContent: any;
  constructor(
    private main: MainServiceService,
    private router: RouterExtensions,
    private route: ActivatedRoute
  ) {
    const query = JSON.parse(JSON.stringify(this.route.queryParams));

    // console.log("query");

    // console.log(query._value);
    this.postId = query._value.postId;
    this.commentId = query._value.commentId;
    this.commentContent = query._value.commentContent;
  }



  onSubmit(content: string): void {
    if (content == "") {
      content = this.commentContent;
    }

    const editForm = {
      commentContent: content,
  
    };
    // console.log(editForm);
    this.main.editComment(editForm, this.postId, this.commentId);

    this.router.navigate(["post", this.postId]);
  }
  ngOnInit(): void {}
}
