import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray } from '@angular/forms';

import { Field } from '../../models/field.interface';
import { FieldConfig } from '../../models/field-config.interface';

@Component({
  selector: 'form-array',
  template: `
      <div 
        class="dynamic-field"
        [formGroup]="group">
        <label>{{ config.label }}</label>

        <div *ngFor="let fg of controls; let i=index">
          <div class="col-sm-12 row" [formGroup]="fg">
            <div class="">
              <input [id]="config.name + '_' + i + '_id'"
                    type="checkbox" formControlName="is_checked">
              <label [for]="config.name + '_' + i + '_id'"
                    [innerHTML]="config.arrays.controls[i].label"> </label>
            </div>
            <input *ngFor="let e of config.arrays.extras" type="text" 
              [formControlName]="e.name"
              [attr.placeholder]="e.placeholder">
          </div>
        </div>
      </div>`
})
export class FormArrayComponent implements Field {
  config: FieldConfig;
  group: FormGroup;

  get controls() {
    return (this.group.get(this.config.name) as FormArray).controls;
  }
}
