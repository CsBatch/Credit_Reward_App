import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-security-question',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './security-question.component.html',
  styleUrl: './security-question.component.css'
})
export class SecurityQuestionComponent {

  securityQuestion1: string = '';
  answer1:string = '';
  securityQuestion2:string = '';
  answer2: string = '';

    constructor(private router: Router) {}

    

    submitSecurityQuestions(): void {

      // const S1 = this.securityQuestion1;
  
      localStorage.setItem('securityQuestion1', this.securityQuestion1);
      localStorage.setItem('answer1', this.answer1);
      localStorage.setItem('securityQuestion2', this.securityQuestion1);
      localStorage.setItem('answer2', this.answer2);

 
      
      console.log('Security Question 1:', this.securityQuestion1);
      console.log('Answer 1:', this.answer1);
      console.log('Security Question 2:', this.securityQuestion2);
      console.log('Answer 2:', this.answer2);
      this.router.navigate(['/address']);
    }
}