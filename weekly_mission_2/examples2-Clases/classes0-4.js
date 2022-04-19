

/*============ Ejemplo 4: Métodos en los objetos =============*/
console.log('Instanciación de un objeto con propiedades y metodos');

class Pet {

    constructor(name, age, favoriteFood) {
        this.name = name;
        this.age = age;
        this.favoriteFood = favoriteFood;
    }

    greet() {
        return `My name is ${this.name} and my favorite food is ${this.favoriteFood}`
    }
}

const myPet = new Pet('Luna', 4, 'chicken');
console.log(myPet.greet());