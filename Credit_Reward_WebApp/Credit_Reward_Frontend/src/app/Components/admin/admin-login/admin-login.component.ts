import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, EMPTY } from 'rxjs';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
	selector: 'app-admin-login',
	standalone: true,
	imports: [FormsModule],
	templateUrl: './admin-login.component.html',
	styleUrl: './admin-login.component.css'
})

export class AdminLoginComponent {
	constructor(private http: HttpClient, private router: Router) { }

	Email: String = ''
	Password: String = ''
	onSubmit(event: Event) {
		event.preventDefault();
		const Email = this.Email;
		const Password = this.Password;
		this.http.post<any>('http://localhost:8000/admin/login', { Email, Password }).pipe(
			catchError(error => {
				alert('Login failed: ' + error.error.message || 'An error occurred during login');
				return EMPTY;
			})).subscribe(response => {
				console.log('Login successful', response);
				this.router.navigate(['/admindashboard']);
				const user = response['user'];
				const token = response['token']
				localStorage.setItem('token', token);
				this.router.navigate(['/admindashboard']);
			}
			);
	}
}