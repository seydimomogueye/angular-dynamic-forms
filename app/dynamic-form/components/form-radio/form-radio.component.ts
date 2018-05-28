import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Field } from '../../models/field.interface';
import { FieldConfig } from '../../models/field-config.interface';

@Component({
  selector: 'form-radio',
  template: `
    <div 
      class="dynamic-field form-radio"
      [formGroup]="group">
      <label>{{ config.label }}</label>
      <div *ngFor="let option of config.options">
        <input
            type="radio"
            [value]="option.value"
            [formControlName]="config.name">
        <label>{{ option.label }}</label>
      </div>
    </div>`
})
export class FormRadioComponent implements Field {
  config: FieldConfig;
  group: FormGroup;
}
