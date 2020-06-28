export class Appointment {
  doctorName: string;
  patientName: string;
  email: string;
  mobileNumber: string;
  date: Date = new Date();
  time: string;
  type: string;
  bookedTime: string;
  bookingType: string;
}
