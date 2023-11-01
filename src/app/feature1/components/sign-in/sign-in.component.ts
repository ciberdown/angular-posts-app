import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent {
  form!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      name: ['', Validators.required, Validators.name, Validators.minLength(4)],
      age: ['', Validators.required],
      email: ['', Validators.required, Validators.email],
    });
  }

  submit() {
    console.log(this.form.value);
  }
}
