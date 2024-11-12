import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})

export class AdminDashboardComponent {
  constructor(private router: Router) {
    // this.router.navigate(['/admindashboard/usermanagement']);
  }
}
