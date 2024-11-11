import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  standalone: true,
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  constructor(private router: Router) {}
  
  navigateToLogin(loginType: string) {
    if (loginType === 'user') {
      this.router.navigate(['/user-login']);
    } else {
      this.router.navigate(['/admin-login']);
    }
  }
}
