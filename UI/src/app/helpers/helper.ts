import {ValidationField} from '@ccs/framework';
import {toPascal} from '@ccs/shared';

export class Helper {

  static toPascal(o: any) {
    let newO, origKey, newKey, value;
    if (o instanceof Array) {
      newO = [];
      for (origKey in o) {
        value = o[origKey];
        if (typeof value === 'object') {
          value = toPascal(value);
        }
        newO.push(value);
      }
    } else {
      newO = {};
      for (origKey in o) {
        if (o.hasOwnProperty(origKey)) {
          newKey = (origKey.charAt(0).toUpperCase() + origKey.slice(1) || origKey).toString();
          value = o[origKey];
          if (value instanceof Array || (value !== null && value.constructor === Object)) {
            value = toPascal(value);
          }
          newO[newKey] = value;
        }
      }
    }
    return newO;
  }


  static toPascalForMap(object: Map<string, ValidationField>): Map<string, ValidationField> {
    for (let key in object) {
      let newKey = (key.charAt(0).toUpperCase() + key.slice(1) || key).toString();
      object[newKey] = object[key];
      object[key] = null;
    }
    return object;
  }
}
