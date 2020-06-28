import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  MatDatepickerModule

} from '@angular/material/datepicker';
import { DatePipe } from '@angular/common'
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header/header.component';
import { DoctorsComponent } from './components/doctors/doctors.component';
import { ReceptionistComponent } from './components/receptionist/receptionist.component';
import { AppointmentComponent } from './components/appointment/appointment.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FlatpickrModule } from 'angularx-flatpickr';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RegisterComponent } from './components/register/register.component';
import { CanDeactiveGuard } from './guards/candeactivate.guard';
import { DemoModule } from './shared/demo/module';
import { DemoUtilsModule } from './shared/demo-utils/module';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BookedAppointmentsComponent } from './components/booked-appointments/booked-appointments.component';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
// Store Reducers
import { reducerMapper } from './core/redux/reducer.mapper';

import { AvailableEffects } from 'src/app/core/redux/effects/availablity.effects';

import { AvailbilityFacade } from './core/redux/facade/availability.facade';
import { SharedService } from './shared/shared.service';
import { HttpService } from './core/services/http.service';
import { AvailabilityComponent } from './components/availability/availability.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DoctorsComponent,
    ReceptionistComponent,
    AppointmentComponent,
    LoginComponent,
    LogoutComponent,
    RegisterComponent,
    BookedAppointmentsComponent,
    AvailabilityComponent
  ],
  imports: [
    MatFormFieldModule, MatInputModule, MatDatepickerModule, MatTooltipModule,
    MatNativeDateModule, MatDividerModule, MatButtonModule, MatSnackBarModule
    ,
    BrowserModule,
    FlatpickrModule,
    DemoModule,
    EffectsModule,
    DemoUtilsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    AppRoutingModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    StoreModule.forRoot(reducerMapper),
    EffectsModule.forRoot([AvailableEffects]),
    NgbModule,
    NgbModalModule
  ],
  providers: [CanDeactiveGuard, DatePipe, AvailbilityFacade, SharedService,HttpService],

  // bootstrap: [DemoComponent]
  bootstrap: [AppComponent]
})
export class AppModule { }
