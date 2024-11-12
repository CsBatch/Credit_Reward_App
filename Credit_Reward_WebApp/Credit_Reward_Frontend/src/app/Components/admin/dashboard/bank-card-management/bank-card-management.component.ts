import { NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { AddBankModalComponent } from './add-bank-modal/add-bank-modal.component';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';



interface Bank {
	_id: string;
	BankName: string;
	ActiveStatus: boolean;
	cards: any[];
}

@Component({
	selector: 'app-bank-card-management',
	standalone: true,
	imports: [NgFor, CommonModule, MatDialogModule],
	templateUrl: './bank-card-management.component.html',
	styleUrl: './bank-card-management.component.css'
})
export class BankCardManagementComponent {
	banks: Bank[] = [];
	constructor(private http: HttpClient, private dialog: MatDialog) {
		this.getBank();
	}

	getBank() {
		this.http.get<any>('http://localhost:8000/admin/showbank').subscribe(data => {
			console.log(data);
			this.banks = data;
		})
	}

	openAddBankModal() {
		const dialogRef = this.dialog.open(AddBankModalComponent);
	
		dialogRef.afterClosed().subscribe(result => {
		  if (result) {
			const bankName = result.bankName;
			this.http.post<any>('http://localhost:8000/admin/addbank', {bankName}).subscribe(data => {
				this.getBank()
				console.log(data);
			})
		  }
		});
	  }


	toggleStatus(Bank: Bank) {
		const BankId: String = Bank._id;
		const status: boolean = !Bank.ActiveStatus;
		console.log(status);
		this.http.put<any>(`http://localhost:8000/admin/changeBankStatus/${BankId}`, { status }).subscribe(response => {
			console.log(response)
		})
		this.getBank();
	}
}
