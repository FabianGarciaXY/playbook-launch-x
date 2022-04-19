
// Ejemplo 13: Uso de findIndex, este método regresa la posición del primer elemento que cumpla con la validación que indiques.
const names = ['Fabian', 'Hugo Roberto', 'Juan'];
const result = names.findIndex((name) => name.length > 7);

console.log("Ejemplo 13: Primer elemento cuya palabra sea mayor a 7 esta en la posición: "+ result + ", " + names[result]);
