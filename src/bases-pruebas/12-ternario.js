//operador condicional if, ternario, condicional conjuntivo

const activo = true;

// con un if
let mensajeIf = '';
if (activo) {
  mensajeIf = 'activo';
} else {
  mensajeIf = 'inactivo';
}
console.log(mensajeIf);


// con un ternario
let mensaje = activo ? 'activo' : 'inactivo';

console.log(mensaje);

//condicional conjuntivo
let mensajeConjuntivo = activo && 'activo';
console.log(mensajeConjuntivo);