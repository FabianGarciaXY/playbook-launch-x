
// Ejemplo 16: Ordenando una lista de objetos

const users = [
    { name: 'Fabián', age: 80 },
    { name: 'Luis', age: 50 },
    { name: 'Laura', age: 18 },
    { name: 'Monica', age: 20 },
    { name: 'Gustavo', age: 75 },
    { name: 'Andrea', age: 90 },
  ]
  
  users.sort((a, b) => { // podemos invocar una función
    if (a.age < b.age) return -1
    if (a.age > b.age) return 1
    return 0
  })
  
  console.log("Ejemplo 16: Ordenando una lista de objetos por la edad")
  console.log(users) // sorted ascending