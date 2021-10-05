import {multiplicacion} from '../js/multiplicacion';

test('multiplicar 2 * 3 es igual a 6', () => {
  expect(multiplicacion(2, 3)).toBe(6);
});