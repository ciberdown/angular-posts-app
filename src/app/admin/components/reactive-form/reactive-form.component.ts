import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormService } from './reactive-form.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss'],
})
export class ReactiveFormComponent implements OnInit, OnDestroy {
  myForm: FormGroup = this.rfService.myForm;

  constructor(public rfService: ReactiveFormService) {}

  ngOnInit(): void {}

  onSubmit() {
    this.myForm.reset()
    console.log(this.rfService.getEmail()?.value);
  }

  ngOnDestroy(): void {}
}
