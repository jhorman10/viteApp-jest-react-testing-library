import { getHeroeByIdAsync } from '../../src/bases-pruebas/09-promesas';

//Pruebas asincronas
describe('Pruebas en 09-promesas', () => {
  test('getHeroeByIdAsync debe retornar un heroe', (done) => {
    const id = 1;
    const heroe = {
      id: 1,
      nombre: 'Batman',
    };
    getHeroeByIdAsync(id).then((heroe) => {
      expect(heroe).toEqual(heroe);

      done();
    });
  });

  //Exepcion
  test('getHeroeByIdAsync debe retornar un error si hereo no existe', (done) => {
    const id = 100;
    getHeroeByIdAsync(id).catch((error) => {
      expect(error).toBe('No se encontro el heroe' + id);
      done();
    });
  });
});
