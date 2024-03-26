export function exists(value) {
    return value !== undefined && value !== null;
}

export function notExists(value) {
    return !exists(value);
}

export function isEmptyObject(obj) {
    return Object.keys(obj).length === 0 && obj.constructor === Object;
}

export function isEmptyArray(arr) {
    return arr.length === 0;
}

export function isEmpty(value) {
    if ((exists(value) && isEmptyArray(value)) || (exists(value) && isEmptyObject(value))) {
        return true;
    }

    return false;
}

export function isNotEmpty(value) {
    if ((exists(value) && isEmptyArray(value)) || (exists(value) && isEmptyObject(value)) || !exists(value)) {
        return false;
    }

    return true;
}
