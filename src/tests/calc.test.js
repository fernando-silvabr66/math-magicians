import calc from '../calc-events/calc';

test('Check Calculate operations', () => {
  let obj = {
    results: '100',
    next: '5',
    operation: '+',
  };
  const button = 'AC';
  expect(calc(obj, button)).toEqual({
    results: null,
    next: null,
    operation: null,
  });
  expect(calc(obj, '=')).toEqual({
    results: '105',
    next: null,
    operation: null,
  });
  expect(calc(obj, '+/-')).toEqual({
    results: '100',
    next: '-5',
    operation: '+',
  });
  obj = {
    results: '20',
    next: '5',
    operation: '÷',
  };
  expect(calc(obj, '=')).toEqual({
    results: '4',
    next: null,
    operation: null,
  });
});
