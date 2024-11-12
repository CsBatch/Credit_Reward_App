import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-address',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './address.component.html',
  styleUrl: './address.component.css'
})
export class AddressComponent {

  constructor(private router: Router) {}
  
  street: string = '';
  city: string = '';
  state: string = '';
  zipCode: string = '';

  submitAddress(): void {
    const address = {
      street: this.street,
      city: this.city,
      state: this.state,
      zipCode: this.zipCode
    };
    console.log('Address:', address);
    localStorage.setItem('address', JSON.stringify(address));
    this.router.navigate(['/profile-completion/birthdate']);
  }
}
