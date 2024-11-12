import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [],
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.css'
})

export class NotificationComponent {

  constructor(private router: Router) {}

  selectedOption: string = 'enable'; // default option

  selectOption(option: string): void {
    this.selectedOption = option;
  }

  processSelection(): void {
    // Perform any necessary processing with the selected option
    console.log(`Selected option: ${this.selectedOption}`);
    this.router.navigate(['/profile-completion/security-questions']);
    // You can add further processing here or pass this data to a service or another component as needed
  }
}
