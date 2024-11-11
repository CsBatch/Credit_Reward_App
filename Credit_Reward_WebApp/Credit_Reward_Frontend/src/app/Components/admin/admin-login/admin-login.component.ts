import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-admin-login',
  standalone: true,
  imports: [],
  templateUrl: './admin-login.component.html',
  styleUrl: './admin-login.component.css'
})
export class AdminLoginComponent {
  constructor(private http: HttpClient) {}

  onSubmit(event: Event) {
    event.preventDefault();

    // Capture form data here, for example:
    const email = (document.getElementById('userInput') as HTMLInputElement).value;
    const password = (document.getElementById('password') as HTMLInputElement).value;

    // Make a POST request to the login endpoint
    this.http.post('/auth/admin/login', { email, password }).subscribe(
      response => {
        console.log('Login successful', response);
      },
      error => {
        console.error('Login failed', error);
      }
    );
  }

}


/**
 * 
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login-page',
  standalone: true,
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.css',
})
export class UserLoginComponent {
  constructor(private http: HttpClient) {}

  onSubmit(event: Event) {
    event.preventDefault();

    // Capture form data here, for example:
    const email = (document.getElementById('userInput') as HTMLInputElement).value;
    const password = (document.getElementById('password') as HTMLInputElement).value;
    const loginType = (document.querySelector('input[name="loginType"]:checked') as HTMLInputElement).value;

    // Make a POST request to the login endpoint
    this.http.post('/auth/user/login', { email, password, loginType }).subscribe(
      response => {
        console.log('Login successful', response);
      },
      error => {
        console.error('Login failed', error);
      }
    );
  }
}



 */
