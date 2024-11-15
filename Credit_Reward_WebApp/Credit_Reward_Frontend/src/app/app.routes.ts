import { Routes } from '@angular/router';
import { UserLoginComponent } from './Components/user/user-login/user-login.component';
import { AdminLoginComponent } from './Components/admin/admin-login/admin-login.component';
import { HomePageComponent } from './Components/home/home-page/home-page.component';
import { UserRegistrationComponent } from './Components/user/user-registration/user-registration.component';
import { ProfileCompletionComponent } from './Components/user/profile-completion/profile-completion.component';
import { SecurityQuestionComponent } from './Components/user/profile-completion/security-question/security-question.component';
import { AddressComponent } from './Components/user/profile-completion/address/address.component';
import { BirthDateComponent } from './Components/user/profile-completion/birth-date/birth-date.component'
import { SsnNumberComponent } from './Components/user/profile-completion/ssn-number/ssn-number.component';
import { IncomeComponent } from './Components/user/profile-completion/income/income.component';
import { DashboardComponent } from './Components/user/dashboard/dashboard.component';
import { AdminDashboardComponent } from './Components/admin/dashboard/dashboard.component';
import { UserManagementComponent } from './Components/admin/dashboard/user-management/user-management.component';
import { NotificationComponent } from './Components/user/profile-completion/notification/notification.component';
import { BankCardManagementComponent } from './Components/admin/dashboard/bank-card-management/bank-card-management.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'user-login', component: UserLoginComponent },
  { path: 'admin-login', component: AdminLoginComponent },
  { path: 'register', component: UserRegistrationComponent },
  {
    path: 'profile-completion',
    component: ProfileCompletionComponent,
    children: [
      { path: 'notification', component: NotificationComponent },
      { path: 'security-questions', component: SecurityQuestionComponent },
      { path: 'address', component: AddressComponent },
      { path: 'birthdate', component: BirthDateComponent },
      { path: 'termsandcondition', component: SsnNumberComponent },
      { path: 'annualincome', component: IncomeComponent }
    ]
  },
  { path: 'dashboard', component: DashboardComponent },
  {
    path: 'admindashboard',
    component: AdminDashboardComponent,
    children: [
      { path: 'usermanagement', component: UserManagementComponent },
      { path: 'bankcardmanagement', component: BankCardManagementComponent }
     
      // Add other routes here
    ]
  }
];
