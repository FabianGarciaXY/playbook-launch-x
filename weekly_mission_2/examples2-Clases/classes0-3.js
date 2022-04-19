

/*============ Ejemplo 3: Instanciar un objeto con atributos =============*/
console.log('Ejemplo 3: Instanciar un objeto con atributos');

// Creando una clase con un constructor que acepta atributos
class Person {
    
    constructor(name, age, pets) {
        this.name = name,
        this.age = age,
        this.pets = pets
    }
}

// Crear un objeto de la clase Person (esto se le llama instanciación)
const newPerson = new Person('Fabian', 23, ['Kira', 'Pancho', 'Oso']);
console.log("Ejemplo 3: Instanciar un objeto con atributos");
console.log(newPerson);