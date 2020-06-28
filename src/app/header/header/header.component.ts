import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared/shared.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  btnName: string;
  constructor(private router: Router, public shared: SharedService, public loginService: LoginService) {

    this.loginService.getBtnName().subscribe((resp: string) => {
      this.btnName = resp;
    });
  }
  ngOnInit() {
    this.btnName = 'Login';
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
