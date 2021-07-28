import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "@nativescript/angular";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";
import { ProviderListComponent } from "./provider-list/provider-list.component";
import { RequestListComponent } from "./request-list/request-list.component";
import { AddPostComponent } from "./add-post/add-post.component";
import { PostDetailComponent } from "./post-detail/post-detail.component";
import { UserDetailComponent } from "./user-detail/user-detail.component";
import { MyProfileComponent } from "./my-profile/my-profile.component";
import { DropDownModule } from "nativescript-drop-down/angular";
import { EditPostComponent } from "./edit-post/edit-post.component";
import { EditCommentComponent } from "./edit-comment/edit-comment.component";
import { EditProfileComponent } from "./edit-profile/edit-profile.component";
import { LoadingComponent } from "./loading/loading.component";

@NgModule({
  bootstrap: [AppComponent],
  imports: [NativeScriptModule, AppRoutingModule, DropDownModule],
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    ProviderListComponent,
    RequestListComponent,
    AddPostComponent,
    PostDetailComponent,
    UserDetailComponent,
    MyProfileComponent,
    EditPostComponent,
    EditCommentComponent,
    EditProfileComponent,
    LoadingComponent
  ],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule {}
