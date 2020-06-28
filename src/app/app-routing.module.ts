import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DoctorsComponent } from './components/doctors/doctors.component';
import { ReceptionistComponent } from './components/receptionist/receptionist.component';
import { AppointmentComponent } from './components/appointment/appointment.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { RegisterComponent } from './components/register/register.component';
import { CanDeactiveGuard } from './guards/candeactivate.guard';
import { BookedAppointmentsComponent } from './components/booked-appointments/booked-appointments.component';
import { AvailabilityComponent } from './components/availability/availability.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'doctor', component: DoctorsComponent },
  { path: 'avai', component: AvailabilityComponent },
  { path: 'receptionist', component: ReceptionistComponent },
  { path: 'appointment', component: AppointmentComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LoginComponent },
  { path: 'register', component: RegisterComponent, canDeactivate: [CanDeactiveGuard] },
  { path: 'logout', component: LogoutComponent },
  { path: 'bappointment', component: BookedAppointmentsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
