import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-birth-date',
  standalone: true,
  imports: [],
  templateUrl: './birth-date.component.html',
  styleUrl: './birth-date.component.css'
})
export class BirthDateComponent {

  constructor(private route: Router) {}
  dateOfBirth: string = '';

  submitDateOfBirth(): void {
    console.log('Date of Birth:', this.dateOfBirth);
    this.route.navigate(['/termsandcondition']);
  }
}
