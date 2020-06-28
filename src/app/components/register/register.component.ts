import { Component, OnInit, ViewChild } from '@angular/core';

import { Observable } from 'rxjs';
import { Form, FormGroup } from '@angular/forms';
import { Register } from 'src/app/model/register';
import { DialogService } from 'src/app/shared/dialog.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  // registerForm = new FormGroup({
  //   email: new FormControl('', Validators.required),
  //   password: new FormControl('', Validators.required)
  // });



  @ViewChild('registerForm', { static: false }) formValues;
  constructor(private dialogService: DialogService, private http: HttpClient) { }

  register: Register = new Register();
  showPassWordWarn: boolean;
  showSuccessMsg: boolean;
  showSpinner: boolean = false;
  successMessage: string;
  registerForm: FormGroup;
  ngOnInit() {
  }




  signIn(): void {
    this.http.get('http://localhost:9090/api/v1/mail/' + this.register.email).subscribe((resp: string) => {
      if (resp) {
        this.successMessage = ' Mail Has Been Sent!!! Please Check';
      }
    }, () => { });
    console.log(this.register)
    this.showSpinner = true;
    this.showSuccessMsg = true;
    setTimeout(() => {
      this.showSpinner = false;
    }, 2000);
    if (this.register.password != this.register.confirmpassword) {
      this.showPassWordWarn = true;
    } else {
      this.showPassWordWarn = false;
      console.log(this.register)

    }

  }

  canDeactivate(): Observable<boolean> | boolean {
    if (this.formValues.invalid) {
      return this.dialogService.confirm('Do you want to really exit from Register');
      // this.modalService.open('guard-modal');
      // return this.modalService.navigateAwaySelection$;
    }
    return true;

  }
  reset(): void {
    this.formValues.reset();
  }
  validatePassword(): void {
    if (this.register.password != this.register.confirmpassword) {
      this.showPassWordWarn = true;
    } else {
      this.showPassWordWarn = false;


    }
  }
  cancel(): void {
    this.formValues.reset();
    this.showSuccessMsg = false;
  }
  changed() {
    console.log();
  }

}
