import { PoWebError } from './errors';

test('.name should be taken from the name of the class', () => {
  class FooError extends PoWebError {}
  const error = new FooError('Winter is coming');
  expect(error.name).toBe('FooError');
});
