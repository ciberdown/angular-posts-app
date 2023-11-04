import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ReactiveFormService {
  myForm!: FormGroup;
  forbiddenUsernames: string[] = ['Anna', 'Rosh', 'Ciberdown'];

  constructor() {
    this.buildAReactiveForm();
  }

  buildAReactiveForm() {
    const myForm = new FormGroup({
      userData: new FormGroup({
        name: new FormControl(null, [Validators.required]),
        username: new FormControl(null, [
          Validators.required,
          Validators.minLength(4),
        ]),
      }),

      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required]),
    });

    this.myForm = myForm;
  }
  forbiddenNamesValidator(username: FormControl): usernameValidatorType {
    if (this.forbiddenUsernames.indexOf(username.value) !== -1) {
      return { nameIsForbidden: true };
    }
    return null;
  }

  getName() {
    return this.myForm?.get('userData.name');
  }
  setName(value: string) {
    this.getName()?.setValue(value);
  }

  getUsername() {
    return this.myForm?.get('userData.username');
  }
  setUsername(value: string) {
    this.getName()?.setValue(value);
  }

  getEmail() {
    return this.myForm.get('email');
  }
  setEmail(value: string) {
    this.getName()?.setValue(value);
  }

  getPassword() {
    return this.myForm.get('email');
  }
  setPassword(value: string) {
    this.getPassword()?.setValue(value);
  }
}

type usernameValidatorType = {
  [s: string]: boolean;
} | null
