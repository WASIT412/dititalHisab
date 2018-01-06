/*This class is having various possible validation
 * property items required for different type field
 */
import {RuleItem} from './rule-item';
import {DependentRuleItem} from './dependent-rule-item';

export class ValidationRule {
  required: RuleItem = null;
  minLength: RuleItem = null;
  maxLength: RuleItem = null;
  minValue: RuleItem = null;
  maxValue: RuleItem = null;
  isUrl: RuleItem = null;
  isEmail: RuleItem = null;
  isIPAddress: RuleItem = null;
  isPhoneNumber: RuleItem = null;
  isZipCode: RuleItem = null;
  regex: RuleItem = null;
  notRegex: RuleItem = null;
  dependsOn: DependentRuleItem[] = null;
}
