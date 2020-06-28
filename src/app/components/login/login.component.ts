import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { SharedService } from 'src/app/shared/shared.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  showSpinner = false;
  user: User = new User();
  invalidLogin = false;
  loginForm = new FormGroup({
    username: new FormControl(),
    password: new FormControl()
  });


  constructor(private router: Router, public shared: SharedService, public loginService: LoginService) { }

  ngOnInit() {
  }

  val = () => {
    this.showSpinner = true;

  }

  login() {
    this.loginService.setBtnName('LogOut');
    this.val();
    setTimeout(() => {
      this.showSpinner = false;
      this.user.username = this.loginForm.value.username;
      this.user.password = this.loginForm.value.password;

      if (this.user.username === this.user.password) {
        this.shared.successLogin = true;
        this.invalidLogin = false;
        this.router.navigate(['/doctor'])
      } else {
        this.shared.successLogin = false;
        this.invalidLogin = true;
      }
    }, 2000);

    console.log(this.loginForm.value.password);
    console.log(this.loginForm.value.username);

    // (this.authService.authenticate(this.user).subscribe((resp: string) => {

    //   if (resp)
    //   this.showSpinner = false;
    //   console.log(resp)
    //     this.router.navigate(['viewcustomers']);
    // }));

    // this.http.authenticate(this.user).subscribe(
    //   (resp: UserResponse) => {
    //     if (resp.response) {
    //       this.showSpinner = false;
    //     }
    //     sessionStorage.setItem('username', this.user.username);
    //     console.log(resp.response);
    //     this.router.navigate(['viewcustomers']);
    //   },
    //   (error: Error) => {
    //     if (error) {
    //       this.showSpinner = false;
    //       this.invalidLogin = true;
    //     }
    //   }
    // );

  }

}
