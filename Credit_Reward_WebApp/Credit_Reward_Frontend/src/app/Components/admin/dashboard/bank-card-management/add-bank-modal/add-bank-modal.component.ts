import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-bank-modal',
  standalone: true,
  imports:[CommonModule, ReactiveFormsModule, MatDialogModule],
  templateUrl: './add-bank-modal.component.html',
})
export class AddBankModalComponent {
  bankForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<AddBankModalComponent>
  ) {
    this.bankForm = this.fb.group({
      bankName: [''],
    });
  }

  onAdd() {
    if (this.bankForm.valid) {
      this.dialogRef.close(this.bankForm.value); // Pass bank data back to the parent
    }
  }

  onCancel() {
    this.dialogRef.close();
  }
}
