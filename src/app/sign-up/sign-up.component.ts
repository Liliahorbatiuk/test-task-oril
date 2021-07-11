import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  signUpForm: FormGroup;

  constructor(private fb: FormBuilder,
              public router: Router) { }

  ngOnInit(): void {
    this.initializeForm()
  }

  initializeForm(): void {
    this.signUpForm = this.fb.group({
      name: ["", Validators.required],
      username: ["", Validators.required],
      email: ["", Validators.required, Validators.email],
      phone: ["", Validators.required, Validators.pattern("[0-9]{10}")],
      address: ["", Validators.required],
      street: ["", Validators.required],
      suite: [""],
      city: ["", Validators.required],
      zipcode: ["", Validators.required],
    });
  }

  isControlInvalid(controlName: string): boolean {
    const control = this.signUpForm.controls[controlName];

    const result = control.invalid && control.touched;

    return result;
  }

  onSubmit() {
    const controls = this.signUpForm.controls;
    if (this.signUpForm.invalid) {
      Object.keys(controls)
        .forEach(controlName => controls[controlName].markAsTouched());
      return;
    }
    console.log(this.signUpForm.value);
    this.router.navigate(['main']);
  }

}
