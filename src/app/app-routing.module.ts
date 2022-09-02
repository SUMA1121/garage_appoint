import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminSideComponent } from './admin-side/admin-side.component';
import { AppointmentsBookedComponent } from './appointments-booked/appointments-booked.component';
import { CancelComponent } from './cancel/cancel.component';
import { CheckAppointmentsComponent } from './check-appointments/check-appointments.component';
import { FeedbackAdminComponent } from './feedback-admin/feedback-admin.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { GarageAreasComponent } from './garage-areas/garage-areas.component';
import { NavigationComponent } from './navigation/navigation.component';
import { NewAppointmentComponent } from './new-appointment/new-appointment.component';
import { RegisterComponent } from './register/register.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { UserDataComponent } from './user-data/user-data.component';
import { UserLoginComponent } from './user-login/user-login.component';

const routes: Routes = [
 {path:"userLogin", component:UserLoginComponent},
 {path:"adminLogin", component:AdminLoginComponent},
 {path:"register",component:RegisterComponent},
 {path:"book", component:NewAppointmentComponent},
 {path:"user", component:NavigationComponent},
 {path:"admin", component:AdminSideComponent},
 {path:"userData", component:UserDataComponent},
  {path:"appointmentsBooked", component:AppointmentsBookedComponent},
  {path:"cancelAppointments", component:CancelComponent},
  {path:"feedbackUser", component:FeedbackComponent},
  {path:"checkAppointments", component:CheckAppointmentsComponent},
  {path:'garageAreas', component:GarageAreasComponent},
  {path:'feedbackAdmin', component:FeedbackAdminComponent},
  {path:'reset', component:ResetPasswordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }