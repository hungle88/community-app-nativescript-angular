import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { MainServiceService } from "../main-service.service";
import * as AppSettings from "@nativescript/core/application-settings";
import { RouterExtensions } from "@nativescript/angular";
@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {

  constructor(  private router: RouterExtensions,
    private main: MainServiceService,
    private route: ActivatedRoute) { 
      if (AppSettings.getString("token")) {
        this.router.navigate(["providers"]);
      }
    }

  ngOnInit(): void {
  }

}