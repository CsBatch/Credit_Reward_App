import { Component } from '@angular/core';
import { NotificationComponent } from './notification/notification.component';

@Component({
  selector: 'app-profile-completion',
  standalone: true,
  imports: [NotificationComponent],
  templateUrl: './profile-completion.component.html',
  styleUrl: './profile-completion.component.css'
})
export class ProfileCompletionComponent {

}
