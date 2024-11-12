import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError, EMPTY } from 'rxjs';

@Component({
  selector: 'app-income',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './income.component.html',
  styleUrl: './income.component.css'
})
export class IncomeComponent {


  income: number = 0;
  localStorage: Storage = window.localStorage;
  constructor(private router: Router, private http: HttpClient) {
    // var income : Number;
  }

  onContinue() {

    localStorage.setItem('income', this.income.toString());

    const userData = {
      token: this.localStorage.getItem('token'),
      securityQuestion1: this.localStorage.getItem('securityQuestion1'),
      answer1: this.localStorage.getItem('answer1'),
      securityQuestion2: this.localStorage.getItem('securityQuestion2'),
      answer2: this.localStorage.getItem('answer2'),
      dateOfBirth: this.localStorage.getItem('dateOfBirth'),
      ssn: this.localStorage.getItem('ssn'),
      address: this.localStorage.getItem('address'),
      Email: this.localStorage.getItem('Email'),
      income: this.localStorage.getItem('income')
    }
    console.log(userData);

    this.http.post<any>('http://localhost:8000/auth/profiledetails', userData).pipe(
      catchError(error => { alert('Registration failed: ' + error.error.message || 'An error occurred during registration'); return EMPTY; })).subscribe(response => {
        console.log('Data Updated', response);
      });
    this.router.navigate(['/dashboard']);  // Change '/next-step' to your actual route
  }

  onBack() {
    // Navigate to the previous step or page
    this.router.navigate(['/profile-completion/previous-step']);  // Change '/previous-step' to your actual route
  }
}
