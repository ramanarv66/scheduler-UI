import { Component, OnInit } from '@angular/core';
import { Doctor } from 'src/app/model/allmodels';
import { Subscription } from 'rxjs';
import { SharedService } from 'src/app/shared/shared.service';
import { AvailbilityFacade } from 'src/app/core/redux/facade/availability.facade';

@Component({
  selector: 'app-availability',
  templateUrl: './availability.component.html',
  styleUrls: ['./availability.component.css']
})
export class AvailabilityComponent implements OnInit {

  doctors: Doctor[];
  public rgSubscription: Subscription;

  constructor(private availabilityService: SharedService, private availbilityFacade: AvailbilityFacade) { }

  ngOnInit(): void {
    this.availbilityFacade.availableDoctors$.subscribe((doctors: Doctor[]) => {

      if (doctors && doctors.length > 0) {
        this.doctors = doctors;
      }

    });


    this.availabilityService.getDoctorsAvilability("Today");
  }

}
