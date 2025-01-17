import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatePicker } from 'primeng/datepicker';
import { ButtonModule } from 'primeng/button';
import { Select } from 'primeng/select';
import { FormsModule, FormGroup, FormBuilder, ReactiveFormsModule, Validators, NgForm, FormControl } from '@angular/forms'; 
import { SelectButton } from 'primeng/selectbutton';
import { InputNumber } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { FluidModule } from 'primeng/fluid';
import { InputMaskModule } from 'primeng/inputmask';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CurrencyMaskModule } from "ng2-currency-mask";
import { Router } from '@angular/router';

import { CarsModel } from '../models/carsmodel.model';

@Component({
  selector: 'app-formulario',
  imports: [CommonModule, FormsModule,CurrencyMaskModule, DatePicker,ReactiveFormsModule, ButtonModule, Select, SelectButton, RadioButtonModule, InputNumber, InputTextModule, CheckboxModule, InputMaskModule, FluidModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.scss'
})
export class FormularioComponent  {
  private router: Router

  constructor(router: Router) {
    this.router = router;
  }

  form!: FormGroup;

  ValidForm() {
    if (this.form.valid) {
      console.log('form valid')
      const queryParams = { ...this.form.value };
      console.log(queryParams)
      this.router.navigate([''], {
        queryParams: queryParams,
        queryParamsHandling: 'merge',
      });
    } else {
      console.log('Form invalid!');

    }
  }

  cost: number = 0;

  ngOnInit() {
    this.form = new FormGroup({
      selectedCarModel: new FormControl(this.selectedCarModel, Validators.required),
      startDate: new FormControl(null, Validators.required),
      endDate: new FormControl(null),
      cost: new FormControl(this.cost, Validators.required),
    });
  }


  carModels: CarsModel[] = [
    new CarsModel(1, 'Model 1'),
    new CarsModel(2, 'Model 2'),
    new CarsModel(3, 'Model 3'),
  ];

  selectedCarModel: CarsModel | null = null;



}
