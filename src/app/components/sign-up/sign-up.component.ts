import { Component, OnInit } from '@angular/core';
import { UserService } from '../Services/user.service';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormGroupDirective,
  NgForm,
  Validators,
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService) {
  }

  registerForm!: FormGroup;
  loading = false;
  submitted = false;
  matcher = new MyErrorStateMatcher();
  qualification: string[] = [
    'MBBS',
    'BAMS',
    'B.Sc Nursing',
    'Experienced Health Worker',
    'BHMS',
    'PharmD',
    'BDS',
  ];
  zones: string[] = [
    'East',
    'West',
    'South',
    'North',
    'Mahadevapura',
    'Bommanahalli',
  ];
  shifts = [
    '6 AM to 10 AM',
    '10 AM to 2 PM',
    '2 PM to 6 PM',
    '6 PM to 10 PM',
    'Emergency: Available on call basis',
  ];
  selectedShifts: any;
  days = [
    'MONDAY',
    'TUESDAY',
    'WEDNESDAY',
    'THURSDAY',
    'FRIDAY',
    'SATURDAY',
    'SUNDAY',
  ];
  selectedDays: any;
  languages = [
    'English',
    'Kannada',
    'Hindi',
    'Tamil',
    'Telugu',
    'Malayalam',
    'Assamese',
    'Bengali',
    'Gujarati',
    'Kashmiri',
    'Konkani',
    'Marathi',
    'Nepali',
    'Odia',
    'Punjabi',
    'Urdu',
  ];
  selectedLanguages: any;
  genders = ['NOTDISCLOSED', 'MALE', 'FEMALE', 'OTHER'];
  selectedGender: any;

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      specialization: ['', [Validators.required]],
      currentLocation: ['', [Validators.required]],
      zone: ['', [Validators.required]],
      lineAddress: ['', [Validators.required]],
      city: ['', [Validators.required]],
      wardNumber: ['', [Validators.required]],
      state: ['', [Validators.required]],
      pinCode: ['', [Validators.required]],
      preferedTimeSlots: ['', [Validators.required]],
      preferedDays: ['', [Validators.required]],
      languages: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      remoteWork: ['', [Validators.required]],
    });
  }

  get fval() {
    return this.registerForm.controls;
  }

  onFormSubmit(formValues: any) {
    if (this.registerForm.invalid) {
      return;
    }
    this.loading = true;

    const address: any = {
      lineAddress: formValues.lineAddress,
      wardNumber: formValues.wardNumber,
      city: formValues.city,
      state: formValues.state,
      pinCode: formValues.pinCode,
      zone: formValues.zone,
    };
    let isRemoteWork: boolean = formValues.remoteWork === "1" ? true : false;
    let isFieldWork: boolean = !isRemoteWork;

    let formData = {
      firstName: formValues.firstName,
      lastName: formValues.lastName,
      email: formValues.email,
      gender: formValues.gender,
      mobileNumber: formValues.phone,
      address: address,
      specialization: formValues.specialization,
      preferedTimeSlots: formValues.preferedTimeSlots,
      preferedDays: formValues.preferedDays,
      languages: formValues.languages,
      remoteWork: isRemoteWork,
      fieldWork: isFieldWork
    };

    this.userService.saveUserData(formData).subscribe((user:any) => {
      var isSignedin = (user != null);
      if( isSignedin)
      {
        localStorage.setItem("email", user.email);
        localStorage.setItem("permission", user.permission);
        this.router.navigate(['/register']);
      }});
  }
}

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}
