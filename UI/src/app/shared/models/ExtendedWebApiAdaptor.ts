
import { WebApiAdaptor } from "@syncfusion/ej2-data";

export class ExtendedWebApiAdaptor extends WebApiAdaptor {
  processResponse() {

    //calling base class processResponse function

    let original = super.processResponse.apply(this, arguments);
    original.result =  toPascal(original.values);
    original.count = original.totalRowCount;
    return original;
  }
}

export function  toPascal(o: any) {
  let newO, origKey, newKey, value;
  if (o instanceof Array) {
    newO = [];
    for (origKey in o) {
      value = o[origKey];
      if (typeof value === "object") {
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
