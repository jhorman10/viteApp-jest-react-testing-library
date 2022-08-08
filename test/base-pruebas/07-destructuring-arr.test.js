import { retornaArreglo } from '../../src/bases-pruebas/07-destructuring-arr';

describe('Pruebas en 07-destructuring-arr', () => {
  test('Debe retornar un string y un nùmero', () => {
    const returnvalue = retornaArreglo();
    const [string, number] = returnvalue;
    //Types
    expect(typeof string).toBe('string');
    expect(typeof number).toBe('number');
    //vales
    expect(string).toBe('ABC');
    expect(number).toBe(123);
    //any string
    expect(string).toEqual(expect.any(String));
  });
});
