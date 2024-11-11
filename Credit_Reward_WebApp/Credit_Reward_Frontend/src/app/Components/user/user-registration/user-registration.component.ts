import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { catchError } from 'rxjs/operators';
import { EMPTY } from 'rxjs';

@Component({
  selector: 'app-user-registration',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent {
  // Define form fields
  FirstName: string = '';
  LastName: string = '';
  Email: string = '';
  PhoneNumber: string = '';
  Password: string = '';
  ConfirmPassword: string = '';

  constructor(private http: HttpClient, private router: Router) { }

  onSubmit(event: Event) {
    event.preventDefault();

    // Check if passwords match
    if (this.Password !== this.ConfirmPassword) {
      alert('Passwords do not match');
      return;
    }
    else {
      const registrationData = {
        FirstName: this.FirstName,
        LastName: this.LastName,
        Email: this.Email,
        PhoneNumber: this.PhoneNumber,
        Password: this.Password
      };

      try {
        this.http.post('http://localhost:8000/auth/register', registrationData).pipe(
          catchError(error => {
            alert('Registration failed: ' + error.error.message || 'An error occurred during registration');
            return EMPTY;
          })
        ).subscribe(response => {
          console.log('Registration successful', response);
          const json = JSON.stringify(response);
          console.log("this is", json);
          this.router.navigate(['/user-login']);
        });
      } catch (error) {
        console.error('Error during zzzzz registration', error);
      }
    }
  }
}
