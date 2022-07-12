import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, NavigationStart, NavigationEnd, Event } from '@angular/router';

declare interface RouteInfo {
  path: string;
  title: string;
  rtlTitle: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  {
    path: "/dashboard",
    title: "Dashboard",
    rtlTitle: "لوحة القيادة",
    icon: "icon-chart-pie-36",
    class: ""
  },
  
  // {
  //   path: "/maps",
  //   title: "Maps",
  //   rtlTitle: "خرائط",
  //   icon: "icon-pin",
  //   class: "" },
  // {
  //   path: "/notifications",
  //   title: "Notifications",
  //   rtlTitle: "إخطارات",
  //   icon: "icon-bell-55",
  //   class: ""
  // },

  // {
  //   path: "/user",
  //   title: "User Profile",
  //   rtlTitle: "ملف تعريفي للمستخدم",
  //   icon: "icon-single-02",
  //   class: ""
  // },
  {
    path: "/tables",
    title: "Table List",
    rtlTitle: "قائمة الجدول",
    icon: "icon-puzzle-10",
    class: ""
  },
  {
    path: "/icons",
    title: "Predict",
    rtlTitle: "الرموز",
    icon: "icon-atom",
    class: ""
  },
  // {
  //   path: "/typography",
  //   title: "Typography",
  //   rtlTitle: "طباعة",
  //   icon: "icon-align-center",
  //   class: ""
  // },
  // {
  //   path: "/rtl",
  //   title: "RTL Support",
  //   rtlTitle: "ار تي ال",
  //   icon: "icon-world",
  //   class: ""
  // }
];

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"]
})
export class SidebarComponent implements OnInit {
  menuItems: any[];
  queryString = '';

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.queryParams.subscribe(params => {
      this.queryString = params.predict
    })
    this.router.events.subscribe((event: Event) => {
      if(event instanceof NavigationEnd){
        if(this.queryString && this.queryString !== ' ' && this.queryString !== ''){
          this.initColor(this.router.url.split('?predict=')[0]);
        }else{
          this.initColor(this.router.url);
        }
      }
    })
  }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    if(this.queryString && this.queryString !== ' ' && this.queryString !== '' && this.queryString !== null){
      this.initColor(this.router.url.split('?predict=')[0]);
    }else{
      this.initColor(this.router.url);
    }
  }
  isMobileMenu() {
    if (window.innerWidth > 991) {
      return false;
    }
    return true;
  }

  initColor(string){
    for(let i of this.menuItems){
      if(i.path === string){
        i.class = "active-element-sidebar"
      }else{
        i.class = "inactive-element-sidebar"
      }
    }
  }

  changeColor(string){
    for(let i of this.menuItems){
      if(i.icon === string){
        i.class = "active-element-sidebar"
      }else{
        i.class = "inactive-element-sidebar"
      }
    }
  }
}
