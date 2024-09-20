export function exists(value: any) {
  return value !== undefined && value !== null;
}

export function notExists(value: any) {
  return !exists(value);
}

export function isEmptyObject(obj: Object) {
  return Object.keys(obj).length === 0 && obj.constructor === Object;
}

export function isEmptyArray(arr: Array<any>) {
  return arr.length === 0;
}

export function isEmpty(value: any) {
  if (
    (exists(value) && isEmptyArray(value)) ||
    (exists(value) && isEmptyObject(value))
  ) {
    return true;
  }

  return false;
}

export function isNotEmpty(value: any) {
  if (
    (exists(value) && isEmptyArray(value)) ||
    (exists(value) && isEmptyObject(value)) ||
    !exists(value)
  ) {
    return false;
  }

  return true;
}

export function isEmptyString(str: string) {
  return str.length === 0;
}
