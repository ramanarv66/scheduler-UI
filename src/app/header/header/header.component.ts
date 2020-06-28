import { Component, OnInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared/shared.service';
import { LoginService } from 'src/app/services/login.service';
import { Doctor } from 'src/app/model/allmodels';
import { Subscription } from 'rxjs';
import { AvailbilityFacade } from 'src/app/core/redux/facade/availability.facade';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  btnName: string;

  ationMenu: ElementRef;
  doctors: Doctor[];
  public rgSubscription: Subscription;


  constructor(private router: Router, public shared: SharedService,
    private availbilityFacade: AvailbilityFacade, public loginService: LoginService) {
    this.loginService.getBtnName().subscribe((resp: string) => {
      this.btnName = resp;
    });

  }
  ngOnInit() {
    this.btnName = 'Login';
    this.availbilityFacade.availableDoctors$.subscribe((doctors: Doctor[]) => {
      if (doctors && doctors.length > 0) {
        this.doctors = doctors;
      }
    });
  }
  onClickMe() {
    this.shared.getDoctorsAvilability("Tomorrow");
  }

  onClickAllAvailability() {
    this.router.navigate(['/avai']);
    this.shared.getDoctorsAvilability("Today");
  }
  login() {

    if (this.btnName === 'LogOut') {
      this.router.navigate(['logout']);
      this.loginService.setBtnName('Login');
    } else {
      this.router.navigate(['login']);

    }
  }
  register() {
    this.router.navigate(['/register']);
  }
}
