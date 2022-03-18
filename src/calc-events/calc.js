import operate from './operations';

function isNumber(item) {
  return !!item.match(/[0-9]+/);
}

export default function calc(obj, buttonName) {
  if (buttonName === 'AC') {
    return {
      results: null,
      next: null,
      operation: null,
    };
  }

  if (isNumber(buttonName)) {
    if (buttonName === '0' && obj.next === '0') {
      return {};
    }
    // If there is an operation, update next
    if (obj.operation) {
      if (obj.next) {
        return { ...obj, next: obj.next + buttonName };
      }
      return { ...obj, next: buttonName };
    }
    // If there is no operation, update next and clear the value
    if (obj.next) {
      return {
        next: obj.next + buttonName,
        results: null,
      };
    }
    return {
      next: buttonName,
      results: null,
    };
  }

  if (buttonName === '.') {
    if (obj.next) {
      if (obj.next.includes('.')) {
        return { ...obj };
      }
      return { ...obj, next: `${obj.next}.` };
    }
    if (obj.operation) {
      return { next: '0.' };
    }
    if (obj.results) {
      if (obj.results.includes('.')) {
        return {};
      }
      return { results: `${obj.results}.` };
    }
    return { results: '0.' };
  }

  if (buttonName === '=') {
    if (obj.next && obj.operation) {
      return {
        results: operate(obj.results, obj.next, obj.operation),
        next: null,
        operation: null,
      };
    }
    // '=' with no operation, nothing to do
    return {};
  }

  if (buttonName === '+/-') {
    if (obj.next) {
      return { ...obj, next: (-1 * parseFloat(obj.next)).toString() };
    }
    if (obj.results) {
      return { ...obj, results: (-1 * parseFloat(obj.results)).toString() };
    }
    return {};
  }

  // Button must be an operation

  // When the user presses an operation button without having entered
  // a number first, do nothing.
  // if (!obj.next && !obj.results) {
  //   return {};
  // }

  // User pressed an operation after pressing '='
  if (!obj.next && obj.results && !obj.operation) {
    return { ...obj, operation: buttonName };
  }

  // User pressed an operation button and there is an existing operation
  if (obj.operation) {
    if (obj.results && !obj.next) {
      return { ...obj, operation: buttonName };
    }

    return {
      results: operate(obj.results, obj.next, obj.operation),
      next: null,
      operation: buttonName,
    };
  }

  // no operation yet, but the user typed one

  // The user hasn't typed a number yet, just save the operation
  if (!obj.next) {
    return { operation: buttonName };
  }

  // save the operation and shift 'next' into 'results'
  return {
    results: obj.next,
    next: null,
    operation: buttonName,
  };
}
