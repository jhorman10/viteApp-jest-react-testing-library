import { getSaludo } from '../../src/bases-pruebas/02-template-string.js';

describe('Pruebas 02-template-string', () => {
  test('getSaludo debe retornar "Hola Juan"', () => {
    const nombre = 'Juan';
    const saludo = getSaludo(nombre);
    expect(saludo).toBe('Hola Juan');
  });
});
