import { TestClass } from '../src/index';

describe('TestClass', () => {
  test('RAII', () => {
    const a = new TestClass();
    a.RAII();
    expect(a.status).toBe(true);
  });
});
