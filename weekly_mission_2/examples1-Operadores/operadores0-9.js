// Ejemplo 9: Uso del reduce
const numbers = [3, 12, 5, 10, 20]

const resultOfReduce = numbers.reduce((acc, element) => acc + element, 0)

console.log("Ejemplo 9: Uso de reduce para calcular la suma de los elementos de una lista")
console.log(resultOfReduce)