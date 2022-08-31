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
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
