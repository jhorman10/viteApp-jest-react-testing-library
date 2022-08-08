import {getImagen} from '../../src/bases-pruebas/11-async-await'

describe('Pruebas en 11-async-await',  () => { 
    // test('Debe retornar una URL de la imagen', async () => { 
    //     const url = await getImagen().then(data => data);
    //     expect( url).toEqual( include('https://') );
    //  })
    
     test('getImagen debe de retornar un error si no tenemos api key', async () => {
        const resp = await getImagen();
        //expect( typeof url ).toBe('string');
        expect(resp).toBe('No se encontro la imagen');
      });
 })