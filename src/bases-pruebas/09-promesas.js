import { getHeroeById } from './08-imp-exp';

export const getHeroeByIdAsync = async (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const heroe = getHeroeById(id);
      heroe ? resolve(heroe) : reject('No se encontro el heroe' + id);
    }, 1000);
  });
};