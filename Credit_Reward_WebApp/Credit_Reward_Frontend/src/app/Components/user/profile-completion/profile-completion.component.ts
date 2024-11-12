import { Component } from '@angular/core';
// import { NotificationComponent } from './notification/notification.component';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-profile-completion',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './profile-completion.component.html',
  styleUrl: './profile-completion.component.css'
})
export class ProfileCompletionComponent {
constructor(private router: Router) {

  this.router.navigate(['/profile-completion/notification']);
}

}
