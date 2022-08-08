import {
  getHeroeById,
  getHeroeByOwner,
} from '../../src/bases-pruebas/08-imp-exp';
import heroes from '../../src/data/heroes';

describe('Pruebas en 08-imp-exp', () => {
  test('getHeroeById debe retornar un heroe por ID', () => {
    const id = 1;
    const hero = getHeroeById(id);
    const heroeData = {
      id: 1,
      name: 'Batman',
      owner: 'DC',
    };
    expect(hero).toEqual(heroeData);
  });
  test('getHeroeById debe retornar undefined si no exite el ID', () => {
    const id = 100;
    const hero = getHeroeById(id);
    expect(hero).toBeFalsy();
  });

  test('getHeroeByOwner debe retornar un arreglo de heroes por owner', () => {
    const ownerDC = 'DC';
    const ownerMarvel = 'Marvel';
    const heroesDC = getHeroeByOwner(ownerDC);
    const heroesMarvel = getHeroeByOwner(ownerMarvel);
    const heroeDcData = [
      {
        id: 1,
        name: 'Batman',
        owner: 'DC',
      },
      {
        id: 3,
        name: 'Superman',
        owner: 'DC',
      },
      {
        id: 4,
        name: 'Flash',
        owner: 'DC',
      },
    ];

    expect(heroesMarvel.length).toBe(2);
    expect(heroesDC.length).toBe(3);
    expect(heroesDC).toEqual(heroeDcData);

    //best way!
    expect(heroesDC).toEqual(heroes.filter((heroe) => heroe.owner === ownerDC));
    expect(heroesMarvel).toEqual(heroes.filter((heroe) => heroe.owner === ownerMarvel));
  });
});
