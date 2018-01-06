import {ValidationRule} from './validation-rule';

export class DependentRuleItem {
  property: string;
  value: any;
  operator: any;
  rules: ValidationRule;
}
