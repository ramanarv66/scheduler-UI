import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AvailableDoctorsState } from 'src/app/core/redux/reducer/availability.reducer';
import { GetAvailbleDoctors, GetBookedAppointment, BookAppointment } from '../actions/availablity.action';
import { AvailableDovtorsQuery } from '../selector/availability.selector';
import { BookAppointmentRequest } from 'src/app/model/allmodels';

@Injectable()
export class AvailbilityFacade {

  availableDoctors$ = this.store.pipe(select(AvailableDovtorsQuery.availableDoctors));

  bookedAppointments$ = this.store.pipe(select(AvailableDovtorsQuery.bookedAppointments));

  bookAppointments$ = this.store.pipe(select(AvailableDovtorsQuery.bookAppointments));

  constructor(private store: Store<AvailableDoctorsState>) {

  }

  getDoctorsAvailability(available: string) {
    this.store.dispatch(new GetAvailbleDoctors('/availableDoctors/' + available));
  }

  getBookedAppointments() {
    this.store.dispatch(new GetBookedAppointment('/appointment/booked'));
  }

  bookAppointments(bookAppointmentRequest: BookAppointmentRequest) {
    this.store.dispatch(new BookAppointment('/appointment', bookAppointmentRequest));
  }

}
