import {Component, Output, EventEmitter} from '@angular/core';
import {navBarData} from "./nav-data";
import {RouterLink} from "@angular/router";
import {MatIcon} from "@angular/material/icon";
import {NgClass} from "@angular/common";

interface SideNavToggle {
    screenWidth: number;
    collapsed: boolean;
}

@Component({
  selector: 'app-sidenav',
  imports: [
    RouterLink,
    MatIcon,
    NgClass
  ],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css'
})
export class SidenavComponent {

  @Output() onToggleSideNav: EventEmitter<SideNavToggle> = new EventEmitter();
  collapsed = false;
  screenWidth = 0;
  navData = navBarData;

  toggleCollapse(): void {
    this.collapsed = !this.collapsed;
    this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
  }

  closeSidenav(): void {
    setTimeout(() => {
      this.collapsed = false;
      this.onToggleSideNav.emit({ collapsed: this.collapsed, screenWidth: this.screenWidth });
    }, 250);
  }
}
