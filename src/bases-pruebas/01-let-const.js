
// Variables y Constantes

const nombre = 'Juan';
const apellido = 'Perez';

let valorDado = 5;
valorDado = 4;

//VAR no se debe usar.
if (true) {
    //block scope
    const nombre = 'Pedro';
    console.log(nombre);
}

console.log(nombre, apellido, valorDado);
