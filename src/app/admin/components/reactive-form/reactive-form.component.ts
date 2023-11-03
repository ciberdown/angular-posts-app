import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Observable, catchError } from 'rxjs';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss'],
})
export class ReactiveFormComponent implements OnInit, OnDestroy {
  myForm!: FormGroup;
  initialNameValue: string = 'Sam';
  hobbies: string[] = [];
  forbiddenUsernames = ['anna', 'ciberdown', 'chris'];
  usersObs!: Observable<any>;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.myForm = new FormGroup({
      userData: new FormGroup({
        name: new FormControl(this.initialNameValue, [Validators.required]),
        username: new FormControl(
          null,
          [Validators.required],
          [this.allowUsername.bind(this)],
        ),
      }),
      email: new FormControl(
        null,
        [Validators.email, Validators.required],
        [this.forbiddenEmailsAsyncValidator.bind(this)],
      ),
      hobbies: new FormControl(null),
      expects: new FormArray([]),
    });
  }

  getName() {
    return this.myForm.get('userData.name');
  }
  setName(value: string) {
    this.getName()?.setValue(value);
  }
  getUsername() {
    return this.myForm.get('userData.username');
  }
  getEmail() {
    return this.myForm.get('email');
  }
  getHobbies() {
    return this.myForm.get('hobbies');
  }
  setHobbies(value: string) {
    this.getHobbies()?.setValue(value);
  }
  getExpects() {
    return this.myForm.get('expects');
  }
  keyDown(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.onAddHobby();
    }
  }

  onAddHobby() {
    this.hobbies.push(this.getHobbies()!.value);
    this.setHobbies('');
  }

  allowUsername(username: AbstractControl): Observable<any> | Promise<any> {
    const usersObs = this.http.get('https://jsonplaceholder.typicode.com/users');
    return new Promise((resolve) => {
      usersObs.subscribe({
        next: () => {
          resolve({ usernameIsForbidden: true });
        },
        error: () => {
          resolve(null);
        },
      });
    });
  }
  isUsernameForbidden(): boolean {
    const usernameControl = this.getUsername();
    if (usernameControl?.errors) {
      const errors = usernameControl.errors;
      if (errors && errors['usernameIsForbidden']) {
        return true;
      }
    }
    return false;
  }

  forbiddenEmailsAsyncValidator(
    email: AbstractControl,
  ): Observable<any> | Promise<any> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email.value === 'teymuri.amin@gmail.com') {
          resolve({ emailIsForbidden: true });
        } else {
          resolve(null);
        }
      }, 2000);
    });
  }
  isEmailForbidden(): boolean {
    const emailControl = this.getEmail();
    if (emailControl?.errors) {
      const errors = emailControl.errors;
      if (errors && errors['emailIsForbidden']) {
        return true;
      }
    }
    return false;
  }

  onSubmit() {
    console.log(this.myForm.value);
  }
  ngOnDestroy(): void {
    this.usersObs.subscribe();
  }
}

type CustomUsernameValidatorType = {
  [s: string]: boolean;
} | null;
