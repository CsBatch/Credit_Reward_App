import { NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';



interface Bank {
  _id: String;
  BankName: string;
  ActiveStatus: boolean;
  cards: any[];
}

@Component({
  selector: 'app-bank-card-management',
  standalone: true,
  imports: [NgFor],
  templateUrl: './bank-card-management.component.html',
  styleUrl: './bank-card-management.component.css'
})
export class BankCardManagementComponent {
  banks: Bank[] = [];
  constructor(private http: HttpClient) {
    this.http.get<any>('http://localhost:8000/admin/showbank').subscribe(data => {
      console.log(data);
      this.banks = data;
    })
  }

  toggleStatus(Bank: Bank) {
    const BankId:String = Bank._id;
    const status:boolean = !Bank.ActiveStatus;
    console.log(status);
    this.http.put<any>(`http://localhost:8000/admin/changeBankStatus/${BankId}`, {status}).subscribe(response => {
      console.log(response)
    })
    // Add your code to handle the backend update here, if needed.
  }
}
