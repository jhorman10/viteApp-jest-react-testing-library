const persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    edad: 30,
    direccion: {
        calle: 'Calle falsa 123',
        ciudad: 'Ciudad falsa',
        pais: 'Pais falso'
    }
}

//clonar valores del objeto persona
const persona2 = {...persona};
persona2.nombre = 'Pedro';

console.log(persona);
console.log(persona2);