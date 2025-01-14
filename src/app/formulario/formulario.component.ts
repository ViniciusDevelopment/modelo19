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

@Component({
  selector: 'app-formulario',
  imports: [CommonModule, FormsModule,CurrencyMaskModule, DatePicker,ReactiveFormsModule, ButtonModule, Select, SelectButton, RadioButtonModule, InputNumber, InputTextModule, CheckboxModule, InputMaskModule, FluidModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.scss'
})
export class FormularioComponent  {

}
