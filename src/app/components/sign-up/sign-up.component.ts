import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
  ) {}
  registerForm!: FormGroup;
  loading = false;
  submitted = false;

  ngOnInit() {
    const token = this.route.snapshot.queryParamMap.get('token');
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  get fval() {
    return this.registerForm.controls;
  }

  onFormSubmit() {
    this.submitted = true;
    // return for here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    this.loading = true;
    // this.userService.register(this.registerForm.value).subscribe(
    //   (data) => {
    //     alert('User Registered successfully!!');
    //     this.router.navigate(['/login']);
    //   },
    //   (error) => {
    //     this.toastr.error(error.error.message, 'Error');
    //     this.loading = false;
    //   }
    // );
  }
}
