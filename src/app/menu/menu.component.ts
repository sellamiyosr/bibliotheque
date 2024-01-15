import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AuthService } from '../authentification/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  currentRoute!: string;

  constructor(private router: Router, public authService: AuthService)
  {
    router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.url;
      }
    });
    
   
  }

  isActive(path: string) {
    return this.currentRoute.startsWith(path);
  }

  logout() {
    this.authService.doLogout()
    }
}
