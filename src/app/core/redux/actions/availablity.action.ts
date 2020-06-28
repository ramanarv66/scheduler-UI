import { Action } from '@ngrx/store';
import { BookAppointmentRequest } from 'src/app/model/allmodels';

export enum GetAvailbleDoctorsType {
  GetAvailbleDoctors = '[AvailableDoctors] Get Available Doctors',
  GetAvailbleDoctorSuccess = '[AvailableDoctors] Success Available Doctors',
  GetAvailbleDoctorError = '[AvailableDoctors] Error Available Doctors',

  GetBookedAppointment = '[BookedAppointment] Get Booked Appointments',
  GetBookedAppointmentSuccess = '[BookedAppointment] Success Booked Appointments',


  BookAppointment = '[BookAppointment] Add Appointments',
  BookAppointmentSuccess = '[BookAppointment] Add Appointments Success',
}
export class GetAvailbleDoctors implements Action {
  readonly type = GetAvailbleDoctorsType.GetAvailbleDoctors
  constructor(public payload: string) {
  }
}

export class GetBookedAppointment implements Action {
  readonly type = GetAvailbleDoctorsType.GetBookedAppointment
  constructor(public payload: any) {

  }
}

export class GetBookedAppointmentSuccess implements Action {
  readonly type = GetAvailbleDoctorsType.GetBookedAppointmentSuccess
  constructor(public payload: any) {
  }
}

export class GetAvailbleDoctorSuccess implements Action {
  readonly type = GetAvailbleDoctorsType.GetAvailbleDoctorSuccess
  constructor(public payload: any) {

  }
}

export class BookAppointment implements Action {
  readonly type = GetAvailbleDoctorsType.BookAppointment
  constructor(public payload: string, public bookAppointmentRequest: BookAppointmentRequest) {
  }
}

export class BookAppointmentSuccess implements Action {
  readonly type = GetAvailbleDoctorsType.BookAppointmentSuccess
  constructor(public payload: any) {

  }
}

export class GetAvailbleDoctorError implements Action {
  readonly type = GetAvailbleDoctorsType.GetAvailbleDoctorError
  constructor(public payload: any) {
  }
}

export type AvailableAction = GetAvailbleDoctorError | GetAvailbleDoctorSuccess | GetAvailbleDoctors
  | GetBookedAppointment | GetBookedAppointmentSuccess | BookAppointment | BookAppointmentSuccess
  ;
