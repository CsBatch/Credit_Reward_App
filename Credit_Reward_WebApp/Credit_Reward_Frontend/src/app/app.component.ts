import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [RouterOutlet],
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	constructor(private router: Router) { }

	navigateToLogin(loginType: string) {
		if (loginType === 'user') {
			this.router.navigate(['/user-login']);
		} else {
			this.router.navigate(['/admin-login']);
		}
	}
}
