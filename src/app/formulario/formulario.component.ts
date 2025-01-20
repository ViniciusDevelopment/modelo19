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
import { Router, ActivatedRoute } from '@angular/router';

import { CarsModel } from '../models/carsmodel.model';

@Component({
  selector: 'app-formulario',
  imports: [CommonModule, FormsModule,CurrencyMaskModule, DatePicker,ReactiveFormsModule, ButtonModule, Select, SelectButton, RadioButtonModule, InputNumber, InputTextModule, CheckboxModule, InputMaskModule, FluidModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.scss'
})
export class FormularioComponent  {
  form!: FormGroup;
  //private router: Router

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute, // Inject AcitvatedRoute here
    private router: Router
  ) {

    this.form = this.fb.group({ // Initialize the form
      details: [''], // Field that could store serialized object data
    });
  }

  ValidForm(): void {
    if (this.form.valid) {
      console.log('Form is valid');
      const queryParams: any = { ...this.form.value }; // Get query params

      for (const key in queryParams) {
        if (typeof queryParams[key] === 'object') {
          queryParams[key] = JSON.stringify(queryParams[key]);
        }
      }
      
      this.router.navigate([''], { // Navigate and update the URL with form data
        queryParams: queryParams,
        queryParamsHandling: 'merge', // Keeps existing query params
      });
    } else {
      console.log('Form is invalid');
    }
  }

  cost: number = 0;


  ngOnInit(): void {
    this.form = new FormGroup({
          selectedCarModel: new FormControl(this.selectedCarModel, Validators.required),
          startDate: new FormControl(null, Validators.required),
          endDate: new FormControl(null,Validators.required),
          cost: new FormControl(this.cost, Validators.required),
        });
        
    this.route.queryParams.subscribe((params) => { // Read query parameters
      for (const key in params) {
        if (this.form.contains(key)) {
          try { 
            let value = params[key];
            if (key === 'startDate' || key === 'endDate') { 

              console.log("value antes")
              console.log(value)
              value = new Date(value);
              this.form.get(key)?.setValue(value);
            }
            else{
              this.form.get(key)?.setValue(JSON.parse(params[key]));
            }
            
          } catch {
            this.form.get(key)?.setValue(params[key]); // Set the value to form
          }
        }
      }
    });
  }

  carModels: CarsModel[] = [
    new CarsModel(1, 'Model 1'),
    new CarsModel(2, 'Model 2'),
    new CarsModel(3, 'Model 3'),
  ];

  selectedCarModel: CarsModel | null = null;
}
