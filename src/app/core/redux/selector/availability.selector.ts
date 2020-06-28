import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AvailableDoctorsState,AVAILABILITY_KEY } from 'src/app/core/redux/reducer/availability.reducer';


const availabilityFeature = createFeatureSelector<AvailableDoctorsState>(AVAILABILITY_KEY);

const availableDoctors = createSelector(availabilityFeature,(state:AvailableDoctorsState)=>state.doctors);
const bookedAppointments = createSelector(availabilityFeature,(state:AvailableDoctorsState)=>state.bookedResponse);

const bookAppointments = createSelector(availabilityFeature,(state:AvailableDoctorsState)=>state.appointmentResponse);

export const AvailableDovtorsQuery = {availableDoctors,bookedAppointments,bookAppointments};