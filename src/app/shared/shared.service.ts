import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Appointment } from '../models/appointment';
import { AppointmentResponse } from '../models/appointment-response';
import { Observable } from 'rxjs';
import { DatePipe } from '@angular/common'
import { AvailbilityFacade } from '../core/redux/facade/availability.facade';
import { BookAppointmentRequest } from '../model/allmodels';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  successLogin: boolean;
  constructor(private http: HttpClient, private datePipe: DatePipe, private availbiltyFacade: AvailbilityFacade) { }

  // registerMail(userMailId:string){
  //   this.http.get(userMailId)

  // } //10.30AM

  bookAppointment(appointment: Appointment): Observable<AppointmentResponse> {
    appointment.bookedTime = this.datePipe.transform(appointment.date.toLocaleDateString(), 'dd-MM-yyyy') + ' ' + appointment.time;
    return this.http.post<AppointmentResponse>('http://localhost:8080/api/v1/appointment', appointment);

  }
  sendEmail(mailid: string, bookedTime: string): Observable<any> {
    return this.http.get<any>('http://localhost:9090/api/v1/mail/' + mailid + '/' + bookedTime);


  }

  getDoctorsAvilability(available: string) {

    this.availbiltyFacade.getDoctorsAvailability(available);
  }


  getBookedAppointments() {
    this.availbiltyFacade.getBookedAppointments();
  }

  bookAppointment1(bookAppointmentRequest: BookAppointmentRequest) {

    this.availbiltyFacade.bookAppointments(bookAppointmentRequest);

  }


}
