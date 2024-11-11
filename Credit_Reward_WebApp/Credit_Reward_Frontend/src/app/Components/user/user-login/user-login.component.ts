import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.css',
})
export class UserLoginComponent {

  Email: String = '';
  Password: String = '';


  constructor(private http: HttpClient, private router: Router) { }

  onSubmit(event: Event) {
    event.preventDefault();

    // Capture form data here, for example:
    const Email = this.Email
    const Password = this.Password

    // Make a POST request to the login endpoint
    this.http.post<any>('http://localhost:8000/auth/login', { Email, Password }).pipe(
      catchError(error => {
        alert('Login failed: ' + error.error.message || 'An error occurred during login');
        return EMPTY;
      })).subscribe(response => {
        console.log('Login successful', response);
        const user = response['user'];
        const token = response['token']
        localStorage.setItem('token', token);
        if(user.Profile == false) {
          this.router.navigate(['/profile-completion']);
        }
        else{
          this.router.navigate(['/dashboard']);
        }
      }
    );
  }
}