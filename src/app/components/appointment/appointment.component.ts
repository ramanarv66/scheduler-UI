import {
  Component,
  ChangeDetectionStrategy,
  ViewChild,
  TemplateRef,
} from '@angular/core';
import {
  startOfDay,
  endOfDay,
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  addHours,
} from 'date-fns';
import { Subject } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {
  CalendarEvent,
  CalendarEventAction,
  CalendarEventTimesChangedEvent,
  CalendarView,
} from 'angular-calendar';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { tr } from 'date-fns/locale';
import { Appointment } from 'src/app/models/appointment';
import { SharedService } from 'src/app/shared/shared.service';
import { AppointmentResponse } from 'src/app/models/appointment-response';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AvailbilityFacade } from 'src/app/core/redux/facade/availability.facade';
import { Doctor } from 'src/app/model/allmodels';


@Component({
  selector: 'app-appointment',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent {
  minDate: Date;
  maxDate: Date;
  clicked = false;
  bookingTypes = ['Inhouse', 'Virtual', 'Clinic'];
  morningClicked = false;
  showSlots: boolean;
  morningTimins: string[] = ['08:00', '08:30', '09:00', ' 09:30', '10:00', '10:30', '11:00', '11:30', '12:00', '12:30'];
  afternoonTimins: string[] = ['02:00', ' 02:30', '03:00', '03:30', '04:00', '04:30', '05:00', '05:30', '06:00', '06:30'];
  eveningTimins: string[] = ['07:00', '07:30', '08:00', ' 08:30', '09:00', '09:30', '10:00', ' 10:30', ' 11:00', '11:30'];
  flag6PM = false;
  flag7PM = false;
  flag8PM = false;
  flag9PM = false;
  flag10AM = false;
  flag1030AM = false;
  flag11AM = false;
  flag1130AM = false;
  flag9AM = false;
  flag930AM = false;
  flag630PM = false;
  flag730PM = false;
  flag830PM = false;
  flag930PM = false;
  flag12PM = false;
  flag1230PM = false;
  flag1PM = false;
  flag130PM = false;
  flag2PM = false;
  flag230PM = false;
  flag3PM = false;
  flag330PM = false;
  flag4PM = false;
  flag430PM = false;
  flag5PM = false;
  flag530PM = false;
  slotSelectedDate: number;
  public doctors: Doctor[];
  appointment: Appointment = new Appointment();
  doctotNames = ['Dr.John', 'Dr.David', 'Dr.Andrew'];
  selectedDoctor = "Dr.Ramana";
  constructor(public shared: SharedService, private snackBar: MatSnackBar, private availbilityFacade: AvailbilityFacade) {
    const currentYear = new Date().getFullYear();
    this.minDate = new Date();
    this.maxDate = new Date(currentYear, 11, 31);
    this.slotSelectedDate = new Date().getDate();
    console.log('today date ' + this.slotSelectedDate)
    this.availbilityFacade.availableDoctors$.subscribe((doctors: Doctor[]) => {

      if (doctors && doctors.length > 0) {
        this.doctors = doctors;
      }
    });


  }
  showSnackBar() {
    this.snackBar.open('Email Has been Sent, Please check timings', 'close', {
      duration: 5000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: ['mat-toolbar', 'mat-primary']
    });
  }

  close() {
    console.log('Hello close')
  }
  bookAppointment(): void {
    console.log(this.appointment);
    this.shared.bookAppointment(this.appointment).subscribe((res: AppointmentResponse) => {
      console.log(res);
      this.showSnackBar();
      if (res.success) {
        this.shared.sendEmail(this.appointment.email, this.appointment.bookedTime).subscribe((res: any) => {
          console.log('mail response')
          console.log(res);
        });
      }
    }, () => { });

  }
  selectedDate(type: string, event: MatDatepickerInputEvent<Date>) {

    if (this.slotSelectedDate === event.value.getDate()) {
      this.appointment.date = event.value;
      // this.appointment.date.toLocaleDateString()
      this.showSlots = true;
    } else {
      this.flag6PM = false;
      this.flag7PM = false;
      this.flag8PM = false;
      this.flag9PM = false;
      this.flag10AM = false;
      this.flag1030AM = false;
      this.flag11AM = false;
      this.flag1130AM = false;
      this.flag9AM = false;
      this.flag930AM = false;
      this.flag630PM = false;
      this.flag730PM = false;
      this.flag830PM = false;
      this.flag930PM = false;
      this.flag12PM = false;
      this.flag1230PM = false;
      this.flag1PM = false;
      this.flag130PM = false;
      this.flag2PM = false;
      this.flag230PM = false;
      this.flag3PM = false;
      this.flag330PM = false;
      this.flag4PM = false;
      this.flag430PM = false;
      this.flag5PM = false;
      this.flag530PM = false;



    }

    console.log(event.value.getDate())

    console.log(`${type}: ${event.value}`);
  }
  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    return day !== 0 && day !== 6;
  }
  appointmentClick(event, index?: any) {
    console.log(event.target.textContent + 'index ' + index);
    this.clicked = true;
  }
  toolTipHelp(): string {
    return "hello";
  }
  toolTipHelp1(): string {
    return "already selected";
  }
  appointmentClickE(event) {
    switch (event.target.textContent) {
      case '09:00AM':
        this.flag9AM = true;
        break;
      case '10:00AM':
        this.flag10AM = true;
        break;
      case '11:00AM':
        this.flag11AM = true;
        break;
      case '09:30AM':
        this.flag930AM = true;
        break;
      case '10:30AM':
        this.flag1030AM = true;
        break;
      case '11:30AM':
        this.flag1130AM = true;
        break;

      case '12:00PM':
        this.flag12PM = true;
        break;
      case '01:00PM':
        this.flag1PM = true;
        break;
      case '02:00PM':
        this.flag2PM = true;
        break;
      case '03:00PM':
        this.flag3PM = true;
        break;
      case '04:00PM':
        this.flag4PM = true;
        break;
      case '05:00PM':
        this.flag5PM = true;
        break;
      case '12:30PM':
        this.flag1230PM = true;
        break;
      case '01:30PM':
        this.flag130PM = true;
        break;
      case '02:30PM':
        this.flag230PM = true;
        break;
      case '03:30PM':
        this.flag330PM = true;
        break;
      case '04:30PM':
        this.flag430PM = true;
        break;
      case '05:30PM':
        this.flag530PM = true;
        break;
      case '06:00PM':
        this.flag6PM = true;
        break;
      case '07:00PM':
        this.flag7PM = true;
        break;
      case '08:00PM':
        this.flag8PM = true;
        break;
      case '09:00PM':
        this.flag9PM = true;
        break;
      case '06:30PM':
        this.flag630PM = true;
        break;
      case '07:30PM':
        this.flag730PM = true;
        break;
      case '08:30PM':
        this.flag830PM = true;
        break;
      case '09:30PM':
        this.flag930PM = true;
        break;

      default:
        break;
    }
    console.log(event.target.textContent + 'index ');
    this.appointment.time = event.target.textContent;
    this.clicked = true;
  }

  selectedSlot(index) {
    return true;
  }
  selected() {
    return true;
  }
}
