import { AppService } from './../../services/app.service';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  user = localStorage.getItem('email');

  constructor(private appService: AppService, private router: Router) { }
  isCollapsed = true;
  ngOnInit() {
  }

  toggleSidebarPin() {
    this.appService.toggleSidebarPin();
  }
  toggleSidebar() {
    this.appService.toggleSidebar();
  }
  logout() {
    // @ts-ignore
    localStorage.removeItem('log');
    localStorage.removeItem('email');
    // @ts-ignore
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
    location.reload();
  }

}
