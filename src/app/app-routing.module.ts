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
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './navigation/navigation.component';
import { NewAppointmentComponent } from './new-appointment/new-appointment.component';
import { RegisterComponent } from './register/register.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { UserDataComponent } from './user-data/user-data.component';
import { UserLoginComponent } from './user-login/user-login.component';


const routes: Routes = [
  {path:'', component:HeaderComponent},
 {path:"userLogin", component:UserLoginComponent, children:[{path:'reset', component:ResetPasswordComponent},{path:"user", component:NavigationComponent, children:[ {path:'garageAreas', component:GarageAreasComponent, children:[{path:"book", component:NewAppointmentComponent, children:[  {path:"feedbackUser", component:FeedbackComponent}]}]}, {path:"checkAppointments", component:CheckAppointmentsComponent}]}]},
 {path:"adminLogin", component:AdminLoginComponent, children: [{path:"admin", component:AdminSideComponent, children:[ {path:"userData", component:UserDataComponent},  {path:"cancelAppointments", component:CancelComponent},{path:"appointmentsBooked", component:AppointmentsBookedComponent},  {path:'feedbackAdmin', component:FeedbackAdminComponent}]}]},
 {path:"register",component:RegisterComponent},



//  {path:"userData", component:UserDataComponent},
  
//   {path:"cancelAppointments", component:CancelComponent},
//   {path:"appointmentsBooked", component:AppointmentsBookedComponent},
 
 
//   {path:'feedbackAdmin', component:FeedbackAdminComponent},
  // {path:'reset', component:ResetPasswordComponent},
  {path:'', component:HeaderComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }