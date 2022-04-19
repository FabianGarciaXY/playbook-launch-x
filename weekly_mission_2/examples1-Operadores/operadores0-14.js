// Ejemplo 14: Uso de some, este método validará todos los elementos de la lista, y si alguno cumple con la validación indicada, regresará true, de lo contrario será false.

// lista de elementos
const numbers = [1, 2, 22, 10, 5, 3, 11]
// Uso de Some para ver si al menos uno de los elementos es false

const areANumberThree = numbers.some((b) =>  b === 3)
console.log("Ejemplo 14: Alguno de los elementos en el array es 3: " + areANumberThree) //true
