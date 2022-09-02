import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { RegisterComponent } from './register/register.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { NavigationComponent } from './navigation/navigation.component';
import { NewAppointmentComponent } from './new-appointment/new-appointment.component';
import { GarageAreasComponent } from './garage-areas/garage-areas.component';
import {FormsModule} from '@angular/forms';

import { AdminSideComponent } from './admin-side/admin-side.component';
import { UserDataComponent } from './user-data/user-data.component';
import { CancelComponent } from './cancel/cancel.component';
import { AppointmentsBookedComponent } from './appointments-booked/appointments-booked.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { CheckAppointmentsComponent } from './check-appointments/check-appointments.component';
import { FeedbackAdminComponent } from './feedback-admin/feedback-admin.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserLoginComponent,
    RegisterComponent,
    AdminLoginComponent,
    NavigationComponent,
    NewAppointmentComponent,
    GarageAreasComponent,
    
    AdminSideComponent,
    UserDataComponent,
    CancelComponent,
    AppointmentsBookedComponent,
    FeedbackComponent,
    CheckAppointmentsComponent,
    FeedbackAdminComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
