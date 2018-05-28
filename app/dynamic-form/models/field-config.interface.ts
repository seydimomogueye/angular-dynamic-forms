import { ValidatorFn } from '@angular/forms';

export interface FieldConfig {
  arrays?: any;
  disabled?: boolean;
  label?: string;
  name: string;
  options?: any[];
  placeholder?: string;
  isMultiple?: boolean;
  type: string;
  validation?: ValidatorFn[];
  value?: any;
}
