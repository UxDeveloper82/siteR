import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { User } from '../_models/user';
import { AlertifyService } from '../_services/alertify.service';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() cancelRegister = new EventEmitter();
  user: User;
  registerForm: FormGroup;
  bsConfig: Partial<BsDatepickerConfig>;
  constructor( private authService: AuthService,
               private router: Router,
               private alertify: AlertifyService,
               private fb: FormBuilder) { }

  ngOnInit(): void {
    this.bsConfig = {
      containerClass: 'theme-red'
    };
    this.createRegisterForm();
  }

  // tslint:disable-next-line: typedef
  createRegisterForm() {
    this.registerForm = this.fb.group(
      {
        gender: ['male'],
        username: ['', Validators.required],
        knownAs: ['', Validators.required],
        dateOfBirth: [null, Validators.required],
        city: ['', Validators.required],
        country: ['', Validators.required],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(4),
            Validators.maxLength(8)
          ]
        ],
        confirmPassword: ['', Validators.required]
      },
      { validator: this.passwordMatchValidator }
    );
  }

  // tslint:disable-next-line: typedef
  passwordMatchValidator(g: FormGroup) {
    return g.get('password').value === g.get('confirmPassword').value
      ? null
      : { mismatch: true };
  }
  // tslint:disable-next-line: typedef
  register() {
    if (this.registerForm.valid) {
      this.user = Object.assign({}, this.registerForm.value);
      this.authService.register(this.user).subscribe(
        () => {
          this.alertify.success('Registration succesful');
        },
        error => {
          this.alertify.error(error);
        },
        () => {
          this.authService.login(this.user).subscribe(() => {
            this.router.navigate(['/members']);
          });
        }
      );
    }
  }

  // tslint:disable-next-line: typedef
  cancel() {
    this.cancelRegister.emit(false);
  }

}