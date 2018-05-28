import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { DynamicFieldDirective } from './components/dynamic-field/dynamic-field.directive';
import { DynamicFormComponent } from './containers/dynamic-form/dynamic-form.component';
import { FormArrayComponent } from './components/form-array/form-array.component';
import { FormButtonComponent } from './components/form-button/form-button.component';
import { FormCheckboxComponent } from './components/form-checkbox/form-checkbox.component';
import { FormInputComponent } from './components/form-input/form-input.component';
import { FormRadioComponent } from './components/form-radio/form-radio.component';
import { FormSelectComponent } from './components/form-select/form-select.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [
    DynamicFieldDirective,
    DynamicFormComponent,
    FormArrayComponent,
    FormButtonComponent,
    FormCheckboxComponent,
    FormInputComponent,
    FormRadioComponent,
    FormSelectComponent
  ],
  exports: [DynamicFormComponent],
  entryComponents: [
    FormArrayComponent,
    FormButtonComponent,
    FormCheckboxComponent,
    FormInputComponent,
    FormRadioComponent,
    FormSelectComponent
  ]
})
export class DynamicFormModule {}
