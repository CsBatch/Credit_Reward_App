import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ssn-number',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ssn-number.component.html',
  styleUrl: './ssn-number.component.css'
})
export class SsnNumberComponent {
  constructor(private router: Router) {}
  ssn: string = '';
  isTermsChecked: boolean = false;

  goBack(): void {
    // Logic for going back (e.g., navigate to the previous page)
    console.log("Back button clicked");
  }

  continue(): void {
    // Logic to proceed with the SSN and terms data
    console.log('SSN:', this.ssn);
    localStorage.setItem('ssn', this.ssn);
    console.log('Terms Accepted:', this.isTermsChecked);
    this.router.navigate(['/profile-completion/annualincome']);
  }
}