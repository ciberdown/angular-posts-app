import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.scss'],
})
export class TemplateDrivenFormComponent {
  @ViewChild('myForm') myForm!: NgForm;

  name: string = '';
  age!: number;
  username: string = '';
  email: string = '';
  submitted: boolean = false;

  constructor() {}

  submit() {
    this.submitted = true;
    this.getInputValuesAndSet();
    this.reset();
  }

  getInputValuesAndSet() {
    this.name = this.myForm.value.name;
    this.age = this.myForm.value.age;
    this.email = this.myForm.value.email;
    this.username = this.myForm.value.myUsernameGroup.username;
  }
  reset() {
    this.myForm.reset();
  }
  setName() {
    this.myForm.form.patchValue({
      name: 'Sam',
    });
  }

  onSuggestUsername(event: MouseEvent) {
    event.preventDefault();
    this.setName();
  }
  onAddOther(event: MouseEvent) {
    event.preventDefault();
    this.submitted = false;
  }
}
