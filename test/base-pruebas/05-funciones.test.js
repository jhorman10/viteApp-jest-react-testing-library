import {
  getUser,
  getUsuarioActivo,
} from '../../src/bases-pruebas/05-funciones.js';

describe('Pruebas en 05-funciones', () => {
  test('getUser debe retornar un objeto', () => {
    const testuser = {
      uid: 'ABC123',
      username: 'juan',
    };

    const user = getUser();

    expect(testuser).toEqual(user);
  });

  test('getUsuarioActivo debe retornar un objeto', () => {
    const name = 'juan';
    const testuser = {
      uid: 'ABC123',
      username: name,
    };
    const testuseractive = getUsuarioActivo(name);

    expect(testuser).toEqual(testuseractive);
  });
});
