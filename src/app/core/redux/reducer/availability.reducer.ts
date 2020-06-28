import { AvailableAction, GetAvailbleDoctorsType } from 'src/app/core/redux/actions/availablity.action';
import { Doctor, BookedAppointments, AppointmentResponse } from 'src/app/model/allmodels';
export const AVAILABILITY_KEY = 'availability';


export interface AvailableDoctorsState {

  doctors: Doctor[],
  bookedResponse: BookedAppointments[],
  appointmentResponse: AppointmentResponse
  errorMessage: string
}

export const initialState: AvailableDoctorsState = {
  doctors: [],
  bookedResponse: [],
  appointmentResponse: null,
  errorMessage: null
}


export function AvailabilityReducer(state: AvailableDoctorsState = initialState, action: AvailableAction) {
  switch (action.type) {
    case GetAvailbleDoctorsType.GetAvailbleDoctorSuccess:
      state = {
        ...state,
        doctors: action.payload.body
      };
      break;

    case GetAvailbleDoctorsType.GetBookedAppointmentSuccess:
      state = {
        ...state,
        bookedResponse: action.payload.body
      };
      break;

    case GetAvailbleDoctorsType.BookAppointmentSuccess:
      state = {
        ...state,
        appointmentResponse: action.payload.body
      };
      break;

    case GetAvailbleDoctorsType.GetAvailbleDoctorError:
      state = {
        ...state,
        errorMessage: action.payload
      };
      break;

  }

  return state;

}
