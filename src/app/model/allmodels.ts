import { HttpHeaders } from '@angular/common/http'

export interface Doctor {
  name: string,
  experience: number,
  fee: number,
  specialization: string,
  city: string,
  state: string,
  hospitalName: string,
  availabilty: string

}

export interface RequestOptions {
  body?: any;
  headers?: HttpHeaders;
  reportProgress: boolean;
  responseType?: any;
  observe?: any;
}
export interface Address {
  city: string,
  area: string
}

export interface BookedAppointments {
  doctorName: string,
  patientName: string
  startTime: number,
  endTime: number

}

export interface AppointmentResponse {
  success: string,
  error: string
}
export class BookAppointmentRequest {

  doctorName: string
  patientName: string
  email: string
  mobileNumber: string
  bookedTime: string
  bookingType: string
}
