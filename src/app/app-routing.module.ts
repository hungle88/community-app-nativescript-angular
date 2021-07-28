import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "@nativescript/angular";


import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";
import { AddPostComponent } from "./add-post/add-post.component";
import { PostDetailComponent } from "./post-detail/post-detail.component";
import { UserDetailComponent } from "./user-detail/user-detail.component";
import { MyProfileComponent } from "./my-profile/my-profile.component";

import { ProviderListComponent } from "./provider-list/provider-list.component";
import { RequestListComponent } from "./request-list/request-list.component";
import { ProtectionGuard } from "./protection.guard";
import { EditPostComponent } from "./edit-post/edit-post.component";
import { EditCommentComponent } from "./edit-comment/edit-comment.component";
import { EditProfileComponent } from "./edit-profile/edit-profile.component";
import {LoadingComponent} from "./loading/loading.component"

const routes: Routes = [
  { path: "", redirectTo: "/login", pathMatch: "full" },
  { path: "login", component: LoginComponent },
  { path: "signup", component: SignupComponent },
  {
    path: "providers",
    component: ProviderListComponent,
    canActivate: [ProtectionGuard]
  },
  {
    path: "requests",
    component: RequestListComponent,
    canActivate: [ProtectionGuard]
  },
  {
    path: "posts",
    component: AddPostComponent,
    canActivate: [ProtectionGuard]
  },
  {
    path: "post/:id",
    component: PostDetailComponent,
    canActivate: [ProtectionGuard]
  },
  {
    path: "user/:id",
    component: UserDetailComponent,
    canActivate: [ProtectionGuard]
  },
  {
    path: "profile",
    component: MyProfileComponent,
    canActivate: [ProtectionGuard]
  },

  {
    path: "profile/edit",
    component: EditProfileComponent,
    canActivate: [ProtectionGuard]
  },

  {
    path: "post/:id/comment/:comid/edit",
    component: EditCommentComponent,
    canActivate: [ProtectionGuard]
  },
  {
    path: "post/:id/edit",
    component: EditPostComponent,
    canActivate: [ProtectionGuard]
  },
  { path: "loading", component: LoadingComponent },

];

@NgModule({
  imports: [
    NativeScriptRouterModule.forRoot(routes)
  ],
  exports: [NativeScriptRouterModule]
})
export class AppRoutingModule {}
