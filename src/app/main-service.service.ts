import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import * as AppSettings from "@nativescript/core/application-settings";

import { Http, HttpResponse } from "@nativescript/core";

@Injectable({
  providedIn: "root"
})
export class MainServiceService {

  constructor() {}

  login(formBody: any) {
    Http.request({
      url: "https://community-backend-angular.herokuapp.com/api/v1/auth/login",
      method: "POST",
      headers: { "Content-Type": "application/json" },
      content: JSON.stringify(formBody)
    }).then(
      (response: HttpResponse) => {
        const result = response.content.toJSON();
        console.log(result);

        AppSettings.setString("token", result.result);
        AppSettings.setString("city", result.city);
        AppSettings.setString("state", result.state);
        AppSettings.setString("userFullname", result.userFullname);
        AppSettings.setString("userId", result.userId);
      },
      e => {}
    );
  }

  signup(formBody: any) {
    Http.request({
      url: "https://community-backend-angular.herokuapp.com/api/v1/auth/signup",
      method: "POST",
      headers: { "Content-Type": "application/json" },
      content: JSON.stringify(formBody)
    }).then(
      (response: HttpResponse) => {
        const result = response.content.toJSON();
        console.log(formBody);
        console.log(result);
      },
      e => {}
    );
  }

  getProviderList() {
   const state = AppSettings.getString("state").replace(/ /g, "%20");
   const city = AppSettings.getString("city").replace(/ /g, "%20");
  //  console.log(state);
  //  console.log(city)
    return Http.request({
      url: `https://community-backend-angular.herokuapp.com/api/v1/posts/providers/${state}/${city}`,
      headers: { Authorization: AppSettings.getString("token") },
      method: "GET"
    });
  }
  getRequestList() {
    const state = AppSettings.getString("state").replace(/ /g, "%20");
    const city = AppSettings.getString("city").replace(/ /g, "%20");
    return Http.request({
      url: `https://community-backend-angular.herokuapp.com/api/v1/posts/requests/${state}/${city}`,
      headers: { Authorization: AppSettings.getString("token") },
      method: "GET"
    });
  }

  getPostDetail(id: any) {
    return Http.request({
      url: `https://community-backend-angular.herokuapp.com/api/v1/posts/${id}`,
      headers: { Authorization: AppSettings.getString("token") },
      method: "GET"
    });
  }

  getUserDetail(id: any) {
    return Http.request({
      url: `https://community-backend-angular.herokuapp.com/api/v1/users/${id}`,
      headers: { Authorization: AppSettings.getString("token") },
      method: "GET"
    });
  }

  addPost(formBody: any) {
    Http.request({
      url: "https://community-backend-angular.herokuapp.com/api/v1/posts",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: AppSettings.getString("token")
      },
      content: JSON.stringify(formBody)
    }).then(
      (response: HttpResponse) => {
        const result = response.content.toJSON();
        console.log(formBody);
        console.log(result);
      },
      e => {}
    );
  }

  addComment(formBody: any, id: any) {
    console.log("clicked");
    console.log(id);
    console.log(formBody);
    Http.request({
      url: `https://community-backend-angular.herokuapp.com/api/v1/posts/${id}/comments`,

      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: AppSettings.getString("token")
      },
      content: JSON.stringify(formBody)
    }).then(
      (response: HttpResponse) => {
        const result = response.content.toJSON();
        // console.log(formBody);
        // console.log(result);
      },
      e => {}
    );
  }

  editProfile(formBody: any, id: any) {
    console.log("clicked");
    console.log(id);
    console.log(formBody);
    Http.request({
      url: `https://community-backend-angular.herokuapp.com/api/v1/users/${id}`,

      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: AppSettings.getString("token")
      },
      content: JSON.stringify(formBody)
    }).then(
      (response: HttpResponse) => {
        const result = response.content.toJSON();
        // console.log(formBody);
        // console.log(result);
      },
      e => {}
    );
  }


  editPost(formBody: any, id: any) {
    console.log("clicked");
    console.log(id);
    console.log(formBody);
    Http.request({
      url: `https://community-backend-angular.herokuapp.com/api/v1/posts/${id}`,

      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: AppSettings.getString("token")
      },
      content: JSON.stringify(formBody)
    }).then(
      (response: HttpResponse) => {
        const result = response.content.toJSON();
        // console.log(formBody);
        // console.log(result);
      },
      e => {}
    );
  }



  editComment(formBody: any, id: any, comId: any) {
    console.log("clicked");
    console.log(id);
    console.log(formBody);
    Http.request({
      url: `https://community-backend-angular.herokuapp.com/api/v1/posts/${id}/comments/${comId}`,

      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: AppSettings.getString("token")
      },
      content: JSON.stringify(formBody)
    }).then(
      (response: HttpResponse) => {
        const result = response.content.toJSON();
        // console.log(formBody);
        // console.log(result);
      },
      e => {}
    );
  }

  deletePost(id: any) {
    Http.request({
      url: `https://community-backend-angular.herokuapp.com/api/v1/posts/${id}`,
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: AppSettings.getString("token")
      },
    }).then(
      (response: HttpResponse) => {
        const result = response.content.toJSON();
        console.log(result);
      },
      e => {}
    );
  }

  deleteComment(id: any, comId: any) {
    Http.request({
      url: `https://community-backend-angular.herokuapp.com/api/v1/posts/${id}/comments/${comId}/delete`,
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: AppSettings.getString("token")
      },
    }).then(
      (response: HttpResponse) => {
        const result = response.content.toJSON();
        console.log(result);
      },
      e => {}
    );
  }

  capitalization(value: string) {
    const arr = value.toLowerCase().split(' ');
    for (let i = 0; i < arr.length; i++) {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    return (value = arr.join(' '));
  }

changeLocation(city: any, state: any){
  city = this.capitalization(city);
  state = this.capitalization(state);
AppSettings.setString("city", city)
AppSettings.setString("state", state)
// console.log("AppSettings.getString('city')")

// console.log(AppSettings.getString("city"))

}

}
