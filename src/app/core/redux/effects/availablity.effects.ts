import { Injectable } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { Actions,createEffect,ofType } from '@ngrx/effects';
import { AvailableAction,GetAvailbleDoctorsType, GetAvailbleDoctors, GetBookedAppointmentSuccess, GetBookedAppointment, BookAppointment } from '../../redux/actions/availablity.action';
import { switchMap,mergeMap, map,catchError } from 'rxjs/operators';
import { of } from 'rxjs/internal/observable/of';


@Injectable()
export class AvailableEffects{

    constructor(private actions:Actions,private httpService:HttpService){

    }

    getAvailableDoctors = createEffect(() =>
    this.actions.pipe(
      ofType(GetAvailbleDoctorsType.GetAvailbleDoctors),
      mergeMap((action: GetAvailbleDoctors) =>
        this.httpService.postRequest(action.payload, {}, {}).pipe(
          map((response) => ({ type: GetAvailbleDoctorsType.GetAvailbleDoctorSuccess, payload: response })),
          catchError((error) => {
            const errorResponse = null;
            return of(errorResponse);
          })
        )
      )
    )
  );

  
  getBookedAppointments = createEffect(() =>
  this.actions.pipe(
    ofType(GetAvailbleDoctorsType.GetBookedAppointment),
    mergeMap((action: GetBookedAppointment) =>
      this.httpService.getRequest(action.payload, {}, {}).pipe(
        map((response) => ({ type: GetAvailbleDoctorsType.GetBookedAppointmentSuccess, payload: response })),
        catchError((error) => {
          const errorResponse = null;
          return of(errorResponse);
        })
      )
    )
  )
);

bookedAppointment = createEffect(() =>
this.actions.pipe(
  ofType(GetAvailbleDoctorsType.BookAppointment),
  mergeMap((action: BookAppointment) =>
    this.httpService.postRequest(action.payload, {}, action.bookAppointmentRequest).pipe(
      map((response) => ({ type: GetAvailbleDoctorsType.BookAppointmentSuccess, payload: response })),
      catchError((error) => {
        const errorResponse = null;
        return of(errorResponse);
      })
    )
  )
)
);

}