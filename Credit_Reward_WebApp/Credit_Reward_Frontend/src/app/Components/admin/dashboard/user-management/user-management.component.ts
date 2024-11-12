import { NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';



interface User {
  id: String;
  name: string;
  email: string;
  phone: string;
  status: boolean;
}


@Component({
  selector: 'app-user-management',
  standalone: true,
  imports: [NgFor],
  templateUrl: './user-management.component.html',
  styleUrl: './user-management.component.css'
})

export class UserManagementComponent {
  users: User[] = [];
  constructor(private http: HttpClient) {
    this.http.get<any>('http://localhost:8000/admin/getAllUser').subscribe(data => {
      this.users = data;
    })

  }


  toggleStatus(user: User) {
    const userId:String = user.id;
    const status:boolean = !user.status;
    console.log(status);
    this.http.put<any>(`http://localhost:8000/admin/changestatus/${userId}`, {status}).subscribe(response => {
      console.log(response)
    })


    // Add your code to handle the backend update here, if needed.
  }
}
