// Arreglos en JS 
// const arreglo = new Array(100);
const arreglo = [1,2,3,4];
// No usar new Array()
// No usar .push() porque muta el valor del arreglo
// arreglo.push(5);

// spread operator rompe la referencia del arreglo y 
//trae los valores del arreglo
let arreglo2 = [...arreglo, 5];

//.map() rompe la referencia y crea un nuevo arreglo
const arreglo3 = arreglo2.map(item => item * 2);

console.log('arreglo',arreglo);
console.log('arreglo2',arreglo2);
console.log('arreglo3',arreglo3);