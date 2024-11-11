import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-income',
  standalone: true,
  imports: [],
  templateUrl: './income.component.html',
  styleUrl: './income.component.css'
})
export class IncomeComponent {


  constructor(private router: Router) {
    // var income : Number;
  }

  onContinue() {
    // Store the income value in local storage or handle further logic
    // localStorage.setItem('annualIncome', this.income.toString());
    // Navigate to the next step or page
    this.router.navigate(['/dashboard']);  // Change '/next-step' to your actual route
  }

  onBack() {
    // Navigate to the previous step or page
    this.router.navigate(['/previous-step']);  // Change '/previous-step' to your actual route
  }
}
